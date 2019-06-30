import textfiltersandprocessors as f_methods 
import os.path
from os import path 


#random_comments = f_methods.fetch_random_comment_to_token_list()

if not(path.exists("testing.txt")):
    f_methods.comments_to_file("testing.txt", random_comments)
    
#f_methods.upload_sentiment_DB("testing.txt")


labeled_comments = f_methods.fetch_comments_with_sentiment()
tokenlist = list()
for comment in labeled_comments:
    tokenlist.append(f_methods.comment_to_tokens(comment[0]))

with open('tokens.txt', 'w') as file_object:
    for tokens in tokenlist:
        for token in tokens:
            file_object.write(token + " ")
        file_object.write('\n\n')