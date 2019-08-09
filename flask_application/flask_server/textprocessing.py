import re
import string
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer


def comment_to_tokens(comment):
    # Transform quotes into keyword 'quote'
    comment = check_transform_quotes(comment)
    # Remove comment edits
    comment = check_remove_edits(comment)
    # Split comment into word tokens
    tokens = comment.split()
    # Create trans table to map punctuation to empty string
    map = str.maketrans('', '', string.punctuation)
    # Replace punctuation
    tokens = [t.translate(map) for t in tokens]
    # Remove non-alphabetic
    tokens = [token for token in tokens if token.isalpha()]
    # Filter out one-letter tokens
    tokens = [token for token in tokens if len(token) > 1]
    # Converts to lowercase
    tokens = [t.lower() for t in tokens]
    # Get rid of empahsis letters
    tokens = [remove_emphasis_from_token(token) for token in tokens]
    # Remove stop-words
    #stop_words = set(stopwords.words('english'))
    #tokens = [token for token in tokens if token not in stop_words]
    # Stemming
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


def check_transform_quotes(comment):
    index1 = comment.find('"')
    index2 = comment[index1+1:].find('"')
    if index1 != -1 and index2 != -1:
        return comment[:index1] + "\"quote\"" + comment[index1+index2+2:]
    else:
        return comment


def check_remove_edits(comment):
    edit_words = ["EDIT:", "EDIT", "Edit:", "Edit", "edit:", "edit"]
    for word in edit_words:
        if comment.find(word) != -1:
            return comment[:comment.find(word)]
    return comment
