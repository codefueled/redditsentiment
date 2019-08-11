import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout, Embedding, Flatten, GRU, GlobalMaxPool1D
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import textfiltersandprocessors as f_methods
import random
import datetime, os
import numpy as np
import pickle

NUM_COMMENTS = 880
HALF_COMMENTS = 440
gpu_options = tf.GPUOptions(per_process_gpu_memory_fraction=.333)
sess = tf.Session(config=tf.ConfigProto(gpu_options=gpu_options))

labeled_comments = f_methods.fetch_comments_with_sentiment()

positive_comments = []
negative_comments = []
neutral_comments = []

#Create lists for all positive, negative, and neutral labeled comments
for comment in labeled_comments:
    if comment[1] == 0:
        neutral_comments.append([f_methods.comment_to_tokens(comment[0]), 0])
    elif comment[1] == 1:
        positive_comments.append([f_methods.comment_to_tokens(comment[0]), 0])
    else:
        negative_comments.append([f_methods.comment_to_tokens(comment[0]), 1])

#Only take the number of comments specified by NUM_COMMENTS
neutral_comments = neutral_comments[:HALF_COMMENTS]
positive_comments = positive_comments[:HALF_COMMENTS]
negative_comments = negative_comments[:NUM_COMMENTS]
neupos_comments = neutral_comments + positive_comments

raw_training_data = neupos_comments[:NUM_COMMENTS - 100] + negative_comments[:NUM_COMMENTS - 100]
raw_test_data = neupos_comments[NUM_COMMENTS - 100:NUM_COMMENTS] + negative_comments[NUM_COMMENTS - 100:NUM_COMMENTS]
#Shuffle train and test data
random.shuffle(raw_training_data)
random.shuffle(raw_test_data)

#Build the Tokenizer and Encoded Data
t = Tokenizer()
t.fit_on_texts([comment[0] for comment in raw_training_data])

max_length = max(len(comment[0])for comment in raw_training_data)
vocab_size = len(t.word_index) + 1

f = open("savedtokenizers/hiphopheads2catneg_nonnegtokenizer", "wb")
pickle.dump(t, f)
pickle.dump(max_length, f)
f.close()
#Encoded training data
X_train = t.texts_to_sequences([comment[0] for comment in raw_training_data])
X_train = pad_sequences(X_train, maxlen=max_length, padding='post')
Y_train = [comment[1] for comment in raw_training_data]
print(X_train[0])
print(Y_train[0])
#Encoded test data
X_test = t.texts_to_sequences([comment[0] for comment in raw_test_data])
X_test = pad_sequences(X_test, maxlen=max_length, padding='post')
Y_test = [comment[1] for comment in raw_test_data]
Y_test = np.array(Y_test)

#BUILD MODEL
dim = 4
log = "C:\\Users\\psych\\Anaconda3\\Personal_Projects\\untitled\\logs"
logdir = os.path.join(log, f"dimension{dim}")
tensorboard = tf.keras.callbacks.TensorBoard(logdir, histogram_freq=1)

model = Sequential()

#Layer 1 Embedding
model.add(Embedding(input_dim=vocab_size,
                    output_dim=50,
                    input_length=max_length))

#Layer 2 LSTM

#Layer 2 Pool
model.add(GlobalMaxPool1D())

#Layer 3 Dense
model.add(Dense(4, activation='relu'))


#Layer 4 Output
model.add(Dense(1, activation='sigmoid'))

model.compile(loss='binary_crossentropy',
              optimizer='adam',
              metrics=['accuracy'])

model.summary()

#Train

model.fit(X_train, Y_train, epochs=8, validation_data=(X_test, Y_test), batch_size=15, callbacks=[tensorboard])

model.save("savedmodels/hiphopheads2catneg_nonneg.h5")