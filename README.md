# NLP Text Summarizer

![Python](https://img.shields.io/badge/Python-3.9-blue?style=flat&logo=python) 
![Flask](https://img.shields.io/badge/Flask-2.0.1-black?style=flat&logo=flask) 
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.2.0-38B2AC?style=flat&logo=tailwindcss) 
![scikit-learn](https://img.shields.io/badge/scikit--learn-0.24.2-orange?style=flat&logo=scikitlearn)
![pandas](https://img.shields.io/badge/pandas-1.3.3-blue?style=flat&logo=pandas)
![NumPy](https://img.shields.io/badge/NumPy-1.21.2-013243?style=flat&logo=numpy)
![Next.js](https://img.shields.io/badge/Next.js-13.0.0-black?style=flat&logo=nextdotjs)
![Keras](https://img.shields.io/badge/Keras-2.6.0-D00000?style=flat&logo=keras)
![Neural Networks](https://img.shields.io/badge/Neural%20Networks-Deep%20Learning-blue?style=flat&logo=tensorflow)

A web application that summarizes long text passages using an LSTM-based neural network. Built with TensorFlow on the backend and powered by a modern UI using Next.js and Tailwind CSS. The API layer is handled by Flask, allowing real-time summarization of user input.

[![VISIT](https://img.shields.io/badge/-VISIT-blue?style=for-the-badge)](https://nlp-project-ten.vercel.app/)

## Tech Stack
- ` Python ` : versatile, high-level, interpreted, easy-to-learn programming language.
- ` Scikit-Learn `: A powerful Python library for machine learning.
- ` Next.js ` : Frontend framework based on React for building dynamic, SSR-enabled interfaces.
- ` Flask `: A lightweight Python web framework to build APIs.
- `Tailwind-CSS` : A utility-first CSS framework for building custom, responsive designs quickly by composing classes directly in HTML.
- `Keras` : A high-level deep learning API running on top of TensorFlow, used to quickly build and train neural networks with minimal code.

## Getting Started

### 1. Clone the Repository
First, clone the repository to your local machine:


```bash
git clone https://github.com/rahul-shrivastav/NLP-text-summarizer.git
```
### 2. Install Dependencies
Change the directory and Install the required dependencies by running:

```bash
cd NLP-text-summarizer/backend
pip install -r requirements.txt
cd ../frontend
npm install
```

### 3. Setup Environment Variables in Frontend folder

To run this project, you will need to add the following environment variables to your .env file in frontend
```bash
NEXT_PUBLIC_API_URL=http://127.0.0.1:5000
```
A sample .evn file is also provided in the repository.


### 4. Run the application locally

Navigate to `/backend` and run the development backend server :

```bash
python app.py
```
Now navigate to `/frontend` and run the development frontend server :
```bash
npm run dev
```
Open port `3000` on `localhost` with your browser to see the result. 





