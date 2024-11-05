import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

function App() {
    const [token, setToken] = useState(''); // Replace with actual token retrieval logic
    const [prediction, setPrediction] = useState(null);

    const handlePrediction = (amount) => {
        setPrediction(amount);
    };

    return (
        <div className="App">
            <h1>Personal Finance Tracker</h1>
            <ExpenseForm token={token} onPrediction={handlePrediction} />
            {prediction && <p>Predicted Expense: ${prediction}</p>}
        </div>
    );
}

export default App;
