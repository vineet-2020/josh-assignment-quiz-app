# Quiz Application

## Overview

This repository contains a Quiz Application built using Next, React and Redux. The application allows users to take a quiz with multiple-choice questions, track their progress, and submit their answers for evaluation. Below, you'll find an overview of the application, setup instructions, assumptions made during development, and challenges faced.

### Application Components

The application consists of the following components:

1. **IndexPage**: This is the main page of the quiz application. It manages the state of the quiz, including the current question, selected answers, and navigation between questions.

2. **StartPage**: This component displays the initial page of the quiz, where users can start the quiz by entering their email address.

3. **Question**: This component is responsible for rendering individual quiz questions, answer options, and capturing user selections.

4. **QuestionList**: This component displays a list of all quiz questions, allowing users to quickly navigate to any question, see which questions they've visited, and which questions they've answered.

5. **Timer**: A timer component that tracks the time remaining for the quiz.

6. **Redux Store**: The application uses Redux for state management. The Redux store holds data such as quiz questions, user answers, email, loading status, and error messages.

## Setup Instructions

To run this application locally, follow these steps:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## `Running the App`


## 1. Clone the Repository: 
Begin by cloning the repository containing the app's source code to your local machine using the following command:

```js 
git clone <repository-url>
```
## 2. Navigate to Project Directory: 
Change your working directory to the root folder of the cloned repository: 

```js
cd <repository-folder>
```
## 3. Install Dependencies: 
Install the required dependencies for the app. This can be done using a package manager like npm or yarn: 
```js
npm install
```
## 4. Start the App: 
After the dependencies are installed, you can start the app using the following command: 
```js
npm run dev
```
This will start the development server and open the app in your default web browser. If it doesn't open automatically, you can access it by navigating to http://localhost:3000 in your browser.

## Challenges Faced

During the development of this application, we encountered several challenges and successfully overcame them:

1. **API Integration**: Integrating with an external API, was a crucial part of our application. This process involved asynchronous data fetching and error handling. We needed to ensure that the quiz questions were retrieved accurately from the API and that any potential network errors were gracefully handled.

2. **Redux Setup**: Configuring the Redux store and effectively managing the state for various aspects of the application, including questions, answers, and user progress, presented a complex task. We had to carefully design the Redux slices, reducers, and actions to maintain a clean and organized state management system. This was essential for maintaining the integrity of the quiz and user interactions.

3. **Styling**: Creating an appealing and user-friendly interface was a significant challenge. We aimed to provide a visually attractive and responsive design, but this required careful attention to CSS and layout. Achieving consistency in styling and ensuring that the application looked polished and intuitive on different devices were important considerations.

4. **Navigation**: Implementing smooth navigation between quiz questions was another challenge. We needed to guarantee that users could easily move between questions, see which questions they had visited or attempted, and track their progress accurately. This involved managing the state of the current question and updating the user interface accordingly.

These challenges were addressed through thorough debugging, extensive research and learning. Overcoming them not only enhanced the functionality and aesthetics of our application but also enriched our understanding of React, Redux, and web development in general.

