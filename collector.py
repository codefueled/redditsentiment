import praw
import mysql.connector

#SQL INIT
redditDB = mysql.connector.connect(
    user = 'root',
    host = 'localhost',
    database = 'redditproject'
)

mycursor = redditDB.cursor()
mycursor.execute("CREATE TABLE Hiphopheads (comment_ID INT PRIMARY KEY AUTO_INCREMENT, albumname VARCHAR(100), body VARCHAR(10000), sentiment INT);")

reddit = praw.Reddit(client_id='j7Afg69TlZOI2A',
                     client_secret='Gk1BAnzZbPtK6YgZqRaQ8814v1g', password='test!',
                     user_agent='untitled', username='redditalbumvisual')

for submission in reddit.subreddit('hiphopheads').top('all', limit = 1500):
    if not submission.stickied and '[FRESH ALBUM] Denzel Curry - ZUU' in submission.title:
        #Considers only top-level comments (not replies)
        for comment in submission.comments:
            print(comment.body)
