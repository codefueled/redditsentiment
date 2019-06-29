#Non-member functions to filter and process text before and after SQL data creation
import reddit_db as DB 
import re 

def removeUnicodeFromComment(commentbody):
    commentbody = commentbody.encode('ascii', errors='ignore')
    return commentbody

def generate_random_comment_to_token_list():
    DB.mycursor.execute("SELECT comment_ID, body FROM hiphopheads ORDER BY RAND (0.5) LIMIT 1000")
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
    
    