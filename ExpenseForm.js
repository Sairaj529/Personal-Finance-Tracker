import React, { useState } from 'react';
import axios from 'axios';

const ExpenseForm = ({ token, onPrediction }) => {
    const [rate, setRate] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/predict', { rate: parseFloat(rate) }, {
                headers: { Authorization: `Bearer ${token}` }
            });
            onPrediction(response.data.predicted_amount);
        } catch (error) {
            console.error('Error during prediction:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>Rate:
                <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} required />
            </label>
            <button type="submit">Predict Expense</button>
        </form>
    );
};

export default ExpenseForm;
