import tensorflow as tf
import numpy as np
from tensorflow.keras.preprocessing.text import tokenizer_from_json
from tensorflow.keras.preprocessing.sequence import pad_sequences

class Model:
    def __init__(self):
        pass

    def decode_sequence(self,input_seq):

        with open('models/vocab/y_tokenizer.json') as f:
            tokenizer_json = f.read()
        y_tokenizer = tokenizer_from_json(tokenizer_json)

        reverse_target_word_index = y_tokenizer.index_word
        target_word_index = y_tokenizer.word_index

        encoder_model = tf.keras.models.load_model('models/encoder.h5')
        decoder_model = tf.keras.models.load_model('models/decoder.h5')

        (e_out, e_h, e_c) = encoder_model.predict(input_seq, verbose=0)
        target_seq = np.zeros((1, 1))

        target_seq[0, 0] = target_word_index['sostok'] 

        stop_condition = False
        decoded_sentence = '' 

        while not stop_condition:
            (output_tokens, h, c) = decoder_model.predict([target_seq]
                    + [e_out, e_h, e_c], verbose=0)

            sampled_token_index = np.argmax(output_tokens[0, -1, :])
            sampled_token = reverse_target_word_index[sampled_token_index]

            if sampled_token != 'eostok':
                decoded_sentence += ' ' + sampled_token

            if sampled_token == 'eostok' or len(decoded_sentence.split()) >= 30 - 1:
                stop_condition = True

            target_seq = np.zeros((1, 1))
            target_seq[0, 0] = sampled_token_index

            (e_h, e_c) = (h, c)

        return decoded_sentence
    
    def predict(self,input_text):

        with open('models/vocab/x_tokenizer.json') as f:
            tokenizer_json = f.read()
        tokenizer = tokenizer_from_json(tokenizer_json)

        sequences = tokenizer.texts_to_sequences([input_text])

        x_tr = pad_sequences(sequences,  maxlen=60, padding='post')

        return(self.decode_sequence(x_tr[0].reshape(1, 60)))

