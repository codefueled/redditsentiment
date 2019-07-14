import tensorflow as tf
import keras
import praw
import textfiltersandprocessors as f_methods
import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences

reddit = praw.Reddit(client_id='j7Afg69TlZOI2A',
                     client_secret='Gk1BAnzZbPtK6YgZqRaQ8814v1g', password='test123',
                     user_agent='untitled', username='redditalbumvisual')

comments_to_predict = []
submission = reddit.submission(id='69cgje')
submission.comments.replace_more(limit=None, threshold=50)
print(str(len(submission.comments)) + " top-level comments detected.")
for comment in submission.comments:
    if not comment.stickied:
        # Test the comment properties to handle edge cases.
        commentbody = f_methods.removeUnicodeFromComment(comment.body).decode("utf-8")
        comments_to_predict.append([f_methods.comment_to_tokens(commentbody), comment.score])



#Load model and tokenizer
selected_model = 'savedmodels/hiphopheads3cat.h5'
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
for Y in Y_eval:
    if Y[2] >= .6:
            print(comments_to_predict[i])
            print(Y)
            neg_opinion = neg_opinion + comments_to_predict[i][1]
    else:
            print(comments_to_predict[i])
            print(Y)
            pos_or_neu_opinion = pos_or_neu_opinion + comments_to_predict[i][1]

    i = i + 1

print(f"HERE IS THE ALBUM SENTIMENT {pos_or_neu_opinion/(pos_or_neu_opinion + neg_opinion)}")
# for Y in Y_eval:
#     if Y[0] >= .95:
#         print(comments_to_predict[i])
#         print(Y)
#         neg_opinion = neg_opinion + comments_to_predict[i][1]
#     if Y[0] <= .05:
#         print(comments_to_predict[i])
#         print(Y)
#         pos_opinion = pos_opinion + comments_to_predict[i][1]
#
#     i = i + 1
#
# print(f"HERE IS THE ALBUM SENTIMENT {pos_opinion/(pos_opinion+neg_opinion)}")