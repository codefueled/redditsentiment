import praw

reddit = praw.Reddit(client_id='j7Afg69TlZOI2A',
                     client_secret='Gk1BAnzZbPtK6YgZqRaQ8814v1g', password='Romoregis1!',
                     user_agent='untitled', username='redditalbumvisual')

for submission in reddit.subreddit('hiphopheads').top('all', limit = 1500):
    if not submission.stickied and '[FRESH ALBUM]' in submission.title:
        print(submission.title)
