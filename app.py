from flask import Flask, request, jsonify
import joblib
import numpy as np

app = Flask(__name__)
model = joblib.load('expense_predictor.pkl')

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    rate = np.array([data['rate']]).reshape(-1, 1)
    prediction = model.predict(rate)
    return jsonify({'predicted_amount': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)
