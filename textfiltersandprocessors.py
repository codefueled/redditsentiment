#Non-member functions to filter and process text before and after SQL data creation
import mysql.connector

def removeUnicodeFromComment(commentbody):
    commentbody = commentbody.encode('ascii', errors='ignore')
    return commentbody


    