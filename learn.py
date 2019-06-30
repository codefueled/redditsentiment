import textfiltersandprocessors as f_methods 
import os.path
from os import path 


random_comments = f_methods.generate_random_comment_to_token_list()

if not(path.exists("testing.txt")):
    f_methods.comments_to_file("testing.txt", random_comments)
    
f_methods.upload_sentiment_DB("testing.txt")