// Import necessary dependencies
import { configureStore } from '@reduxjs/toolkit';
import quizReducer from './quizSlice'; 

// Configure and create the Redux store
const store = configureStore({
  reducer: {
    quiz: quizReducer, // Include your reducer here, where 'quiz' is the slice name
  },
});

// Export the Redux store for use in your application
export default store;
