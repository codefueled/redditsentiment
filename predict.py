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
submission = reddit.submission(id='cc2rf9')
submission.comments.replace_more(limit=None, threshold=50)
print(str(len(submission.comments)) + " top-level comments detected.")
for comment in submission.comments:
    if not comment.stickied:
        # Test the comment properties to handle edge cases.
        commentbody = f_methods.removeUnicodeFromComment(comment.body).decode("utf-8")
        comments_to_predict.append(f_methods.comment_to_tokens(commentbody))



#Load model and tokenizer
selected_model = 'savedmodels/hiphopheads2cat.h5'
model = tf.keras.models.load_model(selected_model)

selected_tokenizer = 'savedtokenizers/hiphopheads2cattokenizer'
with open(selected_tokenizer, 'rb') as pkl:
    t = pickle.load(pkl)
    max_length = pickle.load(pkl)

#Convert to sequences
X_eval = t.texts_to_sequences([comment for comment in comments_to_predict])
X_eval = pad_sequences(X_eval, maxlen=max_length, padding='post')

i = 0
Y_eval = model.predict(X_eval)
for Y in Y_eval:
    print(comments_to_predict[i])
    print(Y)
    i = i + 1