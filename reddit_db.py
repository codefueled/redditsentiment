# -*- coding: utf-8 -*-
"""
Created on Sat Jun 29 12:01:21 2019

@author: Alexander Chea
"""

import mysql.connector

# SQL INIT
redditDB = mysql.connector.connect(
    user='root',
    host='localhost',
    database='redditproject'
)

mycursor = redditDB.cursor()