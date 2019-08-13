import tensorflow as tf
import keras
import praw
import textfiltersandprocessors as f_methods
import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences
import reddit_db as DB

reddit = praw.Reddit(client_id='j7Afg69TlZOI2A',
                     client_secret='Gk1BAnzZbPtK6YgZqRaQ8814v1g', password='test123',
                     user_agent='untitled', username='redditalbumvisual')

comments_to_predict = []
submission_ID = 'ci58ms'
submission = reddit.submission(id=submission_ID)
album_name = submission.title[14:]
submission.comments.replace_more(limit=None, threshold=50)
print(str(len(submission.comments)) + " top-level comments detected.")
for comment in submission.comments:
    if not comment.stickied:
        # Test the comment properties to handle edge cases.
        commentbody = f_methods.removeUnicodeFromComment(comment.body).decode("utf-8")
        comments_to_predict.append([f_methods.comment_to_tokens(commentbody), comment.score])



#Load model and tokenizer
selected_model = 'savedmodels/hiphopheads3catPROD.h5'
model = tf.keras.models.load_model(selected_model)

selected_tokenizer = 'savedtokenizers/hiphopheads3cattokenizer'
with open(selected_tokenizer, 'rb') as pkl:
    t = pickle.load(pkl)
    max_length = pickle.load(pkl)

#Convert to sequences
X_eval = t.texts_to_sequences([comment[0] for comment in comments_to_predict])
X_eval = pad_sequences(X_eval, maxlen=max_length, padding='post')

i = 0
Y_eval = model.predict(X_eval)
neg_opinion = 0
pos_or_neu_opinion = 0
total_opinion = 0
for Y in Y_eval:
    if Y[2] >= .6:
            print(comments_to_predict[i])
            print(Y)
            neg_opinion = neg_opinion + comments_to_predict[i][1]
    elif Y[0] > Y[1]:
            print(comments_to_predict[i])
            print(Y)
            pos_or_neu_opinion = pos_or_neu_opinion + (comments_to_predict[i][1] * .2)
    else:
            print(comments_to_predict[i])
            print(Y)
            pos_or_neu_opinion = pos_or_neu_opinion + (comments_to_predict[i][1] * .8)

    i = i + 1
print(pos_or_neu_opinion)
print(neg_opinion)
# When thinking of how to calculate the score, we wanted to be able to accurately know when we have a 'negative'
# comment so we set that threshold to a value of .6. If we do not meet this threshold, the comment is thought of
# as either 'positive or negative'. We do not want to have a neutral comment have the same weight as a positive
# comment, so it will only contribute .2 of the comment score to the growing 'pos_or_neu_opinion', making it have
# a lesser relative weight than to the growing 'neg_opinion'. A deemed positive comment contributes .8 of the comment
# score to 'pos_or_neu_opinion'. These weights can be adjusted.
album_score = pos_or_neu_opinion/(pos_or_neu_opinion + neg_opinion) - .3
print(f"HERE IS THE ALBUM SENTIMENT {album_score}")

input("Press Enter to continue...")

sql = "SELECT COUNT(*) FROM album WHERE submissionID = %s "
val = submission_ID
DB.mycursor.execute(sql, (val,))
count = DB.mycursor.fetchone()[0]
if count != 0:
    try:
        sql = "UPDATE album SET score = %s WHERE submissionID = %s"
        val = (album_score, submission_ID)
        DB.mycursor.execute(sql, val)
    except Exception as e:
        print(e)
else:
    #Artist
    artist_name = album_name[0:album_name.find('-')-1]
    sql = "SELECT COUNT(*) FROM artist WHERE artistname = %s "
    val = artist_name
    DB.mycursor.execute(sql, (val,))
    artist_count = DB.mycursor.fetchone()[0]
    if artist_count == 0:
        sql = "INSERT INTO artist (artistname) VALUES (%s) "
        val = artist_name
        DB.mycursor.execute(sql, (val,))
    #Album
    sql = "SELECT artistID FROM artist WHERE artistname = %s "
    val = artist_name
    DB.mycursor.execute(sql, (val,))
    artist_ID = DB.mycursor.fetchone()[0]

    sql = "INSERT INTO album (artistID, albumname, score, submissionID) VALUES (%s, %s, %s, %s) "
    val = (artist_ID, album_name, album_score, submission_ID)
    DB.mycursor.execute(sql, val)
    #Comments
    sql = "SELECT albumID FROM album WHERE albumname = %s "
    val = album_name
    DB.mycursor.execute(sql, (val,))
    album_ID = DB.mycursor.fetchone()[0]
    for comment in submission.comments:
        if not comment.stickied:
            # Test the comment properties to handle edge cases.
            commentbody = f_methods.removeUnicodeFromComment(comment.body)

            if isinstance(comment.author, type(None)):
                commentauthor = '[deleted]'
            else:
                commentauthor = comment.author.name

            sql = "INSERT INTO comments (albumID, commentbody) VALUES (%s, %s)"
            val = (album_ID, commentbody)
            DB.mycursor.execute(sql, val)
            DB.redditDB.commit()
