import praw
import textfiltersandprocessors as filter
import reddit_db as DB

DB.mycursor.execute(
    "CREATE TABLE IF NOT EXISTS Hiphopheads (comment_ID INT PRIMARY KEY AUTO_INCREMENT, albumname VARCHAR(100), reddituser VARCHAR(20), body VARCHAR(10000), sentiment INT);")

reddit = praw.Reddit(client_id='j7Afg69TlZOI2A',
                     client_secret='Gk1BAnzZbPtK6YgZqRaQ8814v1g', password='test123',
                     user_agent='untitled', username='redditalbumvisual')

for submission in reddit.subreddit('hiphopheads').top('all', limit=1500):
    if not submission.stickied and '[FRESH ALBUM]' in submission.title:
        print(submission.title + ": processing")
        # Filters out the 'More comments object'
        submission.comments.replace_more(limit=None, threshold=50)
        print(str(len(submission.comments)) + " top-level comments detected.")
        # Considers only top-level comments (not replies)
        for comment in submission.comments:
            if not comment.stickied:
                #Test the comment properties to handle edge cases.
                commentbody = filter.removeUnicodeFromComment(comment.body)

                if isinstance(comment.author, type(None)):
                    commentauthor = '[deleted]'
                else:
                    commentauthor = comment.author.name

                sql = "INSERT INTO Hiphopheads (albumname, reddituser, body, sentiment) VALUES (%s, %s, %s, NULL)"
                commentinfo = (submission.title[14:], commentauthor, commentbody)
                DB.mycursor.execute(sql, commentinfo)
                DB.redditDB.commit()
        print(submission.title + ": comments inserted into SQL table")