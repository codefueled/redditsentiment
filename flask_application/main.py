import pymysql
from app import app
from db_config import mysql
from flask import jsonify
from flask import flash, request,
from flask_restplus import Api, Resource, fields


my_app = Api(app=app, version="1.0",
             title="Reddit Sentiment", description="Test")
name_space = my_app.namespace(
    'Comment Cycler', description='Get random classified comments')


@name_space.route("/cycler")
class CommentCycler(Resource):
    def get(self):
        conn = mysql.connect()
        cursor = conn.cursor(pymysql.cursors.DictCursor)
        cursor.execute("SELECT * FROM hiphopheads LIMIT 5")
        rows = cursor.fetchall()
        resp = jsonify(rows)
