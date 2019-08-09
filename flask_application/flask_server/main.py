import pymysql
import numpy as np
from app import app
from db_config import mysql
from flask import flash, request, jsonify
from flask_restplus import Api, Resource, fields
import tensorflow as tf
from keras.preprocessing.sequence import pad_sequences
from textprocessing import comment_to_tokens
import pickle
from flask_cors import CORS

CORS(app)

my_app = Api(app=app, version="1.0",
             title="Reddit Sentiment", description="Test")


def HipHopHeadsPredictor(comments):
    comments_to_predict = []
    selected_model = 'models/HipHopHeads3catmodel_PROD.h5'
    selected_tokenizer = 'tokenizers/HipHopHeads3cattokenizer_PROD'
    model = tf.keras.models.load_model(selected_model)
    with open(selected_tokenizer, 'rb') as pkl:
        tknizer = pickle.load(pkl)
        max_length = pickle.load(pkl)

    for comment in comments:
        comments_to_predict.append([comment_to_tokens(comment['commentbody'])])

    X_eval = tknizer.texts_to_sequences(
        [comment[0] for comment in comments_to_predict])
    X_eval = pad_sequences(X_eval, maxlen=max_length, padding='post')
    Y_eval = model.predict(X_eval)

    i = 0
    for comment in comments:
        comment.update(
            {'probability': str(max(Y_eval[i])), 'prediction': np.argmax(Y_eval[i]).item()})
        i = i + 1
    return comments


class CommentCycler(Resource):
    def get(self):
        try:
            conn = mysql.connect()
            cursor = conn.cursor(pymysql.cursors.DictCursor)
            cursor.execute(
                "SELECT * FROM comments ORDER BY RAND() LIMIT 5;")
            rows = cursor.fetchall()
            rows = HipHopHeadsPredictor(rows)
            resp = jsonify(rows)
            resp.status_code = 200
            return resp
        except Exception as e:
            print(e)
        finally:
            cursor.close()
            conn.close()


my_app.add_resource(CommentCycler, '/cycler')

if __name__ == '__main__':
    app.run(debug=True)
