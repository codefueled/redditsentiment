#Non-member functions to filter and process text before and after SQL data creation

def removeUnicodeFromComment(commentbody):
    commentbody = commentbody.encode('ascii', errors='ignore')
    return commentbody
