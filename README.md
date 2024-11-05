# Personal Finance Tracker
Note: This is a newly completed project and will be fully documented soon!
## Overview
The Personal Finance Tracker is a full-stack web application that helps users manage their finances by tracking expenses and predicting future spending patterns using machine learning.

## Features
- **User Authentication**: Secure login using JWT.
- **Expense Management**: Log, view, and manage expenses.
- **Expense Prediction**: Predicts future expenses based on user input using a trained ML model.
- **Data Visualization**: Displays expenses and predictions in an interactive frontend.

## Technologies Used
- **Backend**: Spring Boot, Java, JWT, MySQL
- **Frontend**: React, Axios
- **Machine Learning**: Python (Flask), scikit-learn
- **Deployment**: AWS Elastic Beanstalk, Heroku, Vercel

## Project Structure
personal-finance-tracker/
|-- backend/                                # Backend code using Spring Boot
|   |-- src/
|   |   |-- main/
|   |       |-- java/
|   |       |   |-- com/example/personalfinancetracker/
|   |       |       |-- controller/         # Controllers for handling HTTP requests
|   |       |       |   |-- ExpenseController.java
|   |       |       |-- model/              # Entity classes for database mapping
|   |       |       |   |-- User.java
|   |       |       |   |-- Expense.java
|   |       |       |-- repository/         # Repositories for database interactions
|   |       |       |   |-- UserRepository.java
|   |       |       |   |-- ExpenseRepository.java
|   |       |       |-- service/            # Service classes for business logic
|   |       |       |   |-- ExpenseService.java
|   |       |       |-- util/               # Utility classes
|   |       |           |-- JwtUtil.java
|   |-- resources/
|   |   |-- application.properties          # Configuration file for database and app settings
|   |-- pom.xml                             # Maven project configuration
|
|-- ml-model/                               # Machine learning model and API
|   |-- app.py                              # Flask API to serve ML predictions
|   |-- expense_predictor.pkl               # Pre-trained machine learning model file
|   |-- requirements.txt                    # Python dependencies for ML model
|
|-- frontend/                               # React frontend code
|   |-- src/
|   |   |-- components/                     # React components
|   |   |   |-- ExpenseForm.js
|   |   |   |-- App.js
|   |-- public/                             # Public files for the React app
|   |   |-- index.html                      # Entry point for the React app
|   |-- package.json                        # Node.js project configuration and dependencies
|
|-- README.md                               # Project documentation
|-- .gitignore                              # File to specify untracked files
|-- LICENSE                                 # License for the project
