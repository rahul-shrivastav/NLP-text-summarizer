from flask import Flask, request, jsonify
from flask_cors import CORS  
from model import Model
import os


app = Flask(__name__)
prediction_model = Model()

CORS(app)  

@app.route('/predict',methods=['POST'])
def predict():
    json_data = request.get_json()
    inp_text = json_data.get('inp_text') if json_data else None

    if not inp_text : return jsonify({'message': 'Error'})
    print(inp_text)



    return jsonify({'prediction': prediction_model.predict(inp_text)})

if __name__ == '__main__':
    app.run(debug=True)
