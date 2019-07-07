import textfiltersandprocessors as f_methods
import os.path
from os import path


#random_comments = f_methods.fetch_random_comment_to_token_list()

#if not(path.exists("alexdata2.txt")):
    #f_methods.comments_to_file("alexdata2.txt", random_comments)

f_methods.upload_sentiment_DB("alexdata2.txt")