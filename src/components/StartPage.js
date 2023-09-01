import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchQuestions } from '../redux/quizSlice'; // Adjust the import path


const StartPage = ({ onStart }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      dispatch(fetchQuestions()); // Fetch questions when the quiz starts
      onStart(email);
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
     <div className="start-page p-8 border rounded-3xl text-center">
      <h2 className="text-3xl mb-4 font-semibold">Welcome to the Quiz App</h2>
      <p className="text-gray-600 mb-6">
        Test your knowledge and have fun with our interactive quiz! Enter your
        email to start.
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="mb-2">
            {/* <sapn className="mr-3 ">Enter Yourail:</sapn> */}
          
          <input
            className="rounded-md p-2 border border-blackfocus:outline-none "
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <button
          type="submit"
          className="hover:bg-[#1e293b] hover:text-white rounded-full border border-gray-500 px-4 py-2 rounded-md mt-4"
        >
          Start Quiz
        </button>
      </form>
    </div>
  </div>
  
  );
};

export default StartPage;
