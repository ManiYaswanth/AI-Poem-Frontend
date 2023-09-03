# AI Poem Generator

# Introduction 
This project is a AI Poem Generator built on Flask and React. It allows you to generate a poem based on the prompt from user.

## Overview
The AI Poem Generator is designed to help users generate a poem using AI based on their idea for a poem. It provides a User Interface which is built on React where a user can provide their poem idea. It uses OpenAI models for the generation of poem.

## Features
- Generate a poem based on user's prompt.
## Getting Started

### Prerequisites

Before you begin, make sure you have the following installed:

- Python
- Flask

### Installation
1. Clone the frontend repository
```bash
git clone https://github.com/ManiYaswanth/AI-Poem-Frontend
```

2. In the project directory of frontend application install dependencies
```bash
npm install
```
3. Start the development server
```bash
npm start
```
The application will be accessible at http://localhost:3000

4. Clone the backend repository:

```bash
git clone https://github.com/ManiYaswanth/AI-Poem-Backend
```

5. Install dependencies:
Use Virtual Environment and install dependencies

```bash
pip3 install -r requirements.txt
```
Configure the .env file with OpenAI API key
OPENAI_API_KEY = your-api-key

6. Navigate to the project directory:

```bash
cd app/
```

7. Run the application:
```bash
python3 main.py
```
The application will be accessible at http://localhost:5000

## Usage
On the User Interface (http://localhost:3000) type a input (Your idea for a poem) and submit. The poem is generated by AI
and filled up on the UI, along with pie chart for emotion analysis.

## Note
Download the VADER lexicon if you haven't already
```python
nltk.download('vader_lexicon') 
```

## Contribute
Contributions are welcome! Feel free to open issues and pull requests.