#Non-member functions to filter and process text before and after SQL data creation
import reddit_db as DB 
import re
import string
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer

def removeUnicodeFromComment(commentbody):
    commentbody = commentbody.encode('ascii', errors='ignore')
    return commentbody

def fetch_random_comment_to_token_list():
    DB.mycursor.execute("SELECT comment_ID, body FROM hiphopheads WHERE sentiment IS NULL ORDER BY RAND (0.5) LIMIT 1000")
    comments = DB.mycursor.fetchall()
    return comments

def fetch_comments_with_sentiment():
    DB.mycursor.execute("SELECT body, sentiment FROM hiphopheads WHERE sentiment IS NOT NULL AND sentiment <> 99")
    comments = DB.mycursor.fetchall()
    return comments

def comments_to_file(filename, comments): 
    with open(filename, 'w') as file_object:
        for comment in comments:
            file_object.write("***" + str(comment[0]) + "***\n")
            file_object.write(comment[1] + "\n")
            file_object.write("######\n")
                              
def upload_sentiment_DB(filename):
    ID = 0
    sentiment = 0
    with open(filename) as file_object:
        for line in file_object:
            if(re.search("^\*\*\*.*\*\*\*$", line)):
                ID = int(line.replace("*", ""))
            elif(re.search("^###.*###$", line)):
                sentiment = int(line.replace("#", ""))
                sql = "UPDATE hiphopheads SET sentiment = %s WHERE comment_ID = %s"
                val = (sentiment,ID)
                DB.mycursor.execute(sql, val)
            else: 
                continue 

def comment_to_tokens(comment):
    #Split comment into word tokens
    tokens = comment.split()
    #Create trans table to map punctuation to empty string
    map = str.maketrans('', '', string.punctuation)
    #Replace punctuation
    tokens = [t.translate(map) for t in tokens]
    #Remove non-alphabetic
    tokens = [token for token in tokens if token.isalpha()]
    #Filter out one-letter tokens
    tokens = [token for token in tokens if len(token) > 1]
    #Converts to lowercase
    tokens = [t.lower() for t in tokens]
    #Get rid of empahsis letters
    tokens = [remove_emphasis_from_token(token) for token in tokens]
    #Remove stop-words
    stop_words = set(stopwords.words('english'))
    #tokens = [token for token in tokens if token not in stop_words]
    #Stemming
    ps = PorterStemmer()
    tokens = [ps.stem(t) for t in tokens]
    return tokens

def remove_emphasis_from_token(token):
    ptr1 = 0
    ptr2 = 1
    token_size = len(token)

    while ptr2 < token_size - 1:
        if token[ptr1] == token[ptr2]:
            count = 0
            ptr2 = ptr2 + 1
            while token[ptr2] == token[ptr1] and ptr2 < token_size - 1:
                count = count + 1
                ptr2 = ptr2 + 1

            if ptr2 == token_size - 1 and token[ptr2] == token[ptr1]:
                token = token[:ptr1 + 1]
            else:
                token = token[:ptr1+1] + token[ptr1+count+2:]
            token_size = len(token)
            ptr2 = ptr1 + 1
        else:
            ptr2 = ptr2 + 1
            ptr1 = ptr1 + 1

    return token




