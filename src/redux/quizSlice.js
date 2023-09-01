import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define an async thunk for fetching questions from the API
export const fetchQuestions = createAsyncThunk(
  'quiz/fetchQuestions',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://opentdb.com/api.php?amount=15');
      const data = await response.json();
      return data.results;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Define an async thunk for setting selected answers (optional)
export const setSelectedAnswersAsync = createAsyncThunk(
  'quiz/setSelectedAnswersAsync',
  async (selectedAnswers, { dispatch }) => {
    // Simulating an API request with a setTimeout
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Dispatch the action to set selected answers
    dispatch(setSelectedAnswers(selectedAnswers));
  }
);

// Define the initial state for the quiz slice
const initialState = {
  questions: [],      // Initial state for questions
  userAnswers: [],    // Initial state for user answers
  email: '',           // Initial state for user's email
  loading: false,     // Initial state for loading
  error: null,        // Initial state for error
};

// Create the quiz slice
const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetchQuestionsSuccess(state, action) {
      state.questions = action.payload;
    },
    fetchQuestionsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    startQuiz(state, action) {
      state.userAnswers = []; // Clear user answers when starting the quiz
      state.email = action.payload.email;
    },
    setSelectedAnswers: (state, action) => {
      state.selectedAnswers = action.payload;
    },
    // ...other reducers
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export necessary actions and reducer
export const {
  fetchQuestionsSuccess,
  fetchQuestionsFailure,
  startQuiz,
  setSelectedAnswers
} = quizSlice.actions;

export default quizSlice.reducer;
