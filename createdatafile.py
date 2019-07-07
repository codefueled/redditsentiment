import textfiltersandprocessors as f_methods
import os.path
from os import path


random_comments = f_methods.fetch_random_comment_to_token_list()

if not(path.exists("briandata.txt")):
    f_methods.comments_to_file("briandata.txt", random_comments)

f_methods.upload_sentiment_DB("briandata.txt")