import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import StartPage from '../components/StartPage';
import Question from '../components/Question';
import QuestionList from '../components/QuestionList';
import Timer from '../components/Timer';
import { useRouter } from 'next/router';
import { setSelectedAnswersAsync } from '../redux/quizSlice';

const IndexPage = () => {
    // React hooks and Redux state management setup
    const router = useRouter(); // Next.js router for navigation
    const dispatch = useDispatch(); // Redux dispatcher
    const { questions } = useSelector((state) => state.quiz); // Get questions from Redux state
    const [currentQuestion, setCurrentQuestion] = useState(0); // State to track the current question
    const [quizStarted, setQuizStarted] = useState(false); // State to track if the quiz has started
    const [visitedQuestions, setVisitedQuestions] = useState(new Array(questions.length).fill(false)); // Track visited questions
    const [selectedAnswers, setSelectedAnswers] = useState(new Array(questions.length).fill(null)); // Track selected answers
    const [answeredQuestions, setAnsweredQuestions] = useState(new Array(questions.length).fill(false)); // Track answered questions
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false); // Track if all questions are answered

    // Function to handle the start of the quiz
    const handleStartQuiz = (inputEmail) => {
        setQuizStarted(true);
    };

    // Function to handle selecting an answer for a question
    const handleSelectAnswer = (answer) => {
        setSelectedAnswers((prevSelectedAnswers) => {
            const updatedSelectedAnswers = [...prevSelectedAnswers];
            updatedSelectedAnswers[currentQuestion] = answer;
            return updatedSelectedAnswers;
        });

        setAnsweredQuestions((prevAnsweredQuestions) => {
            const updatedAnsweredQuestions = [...prevAnsweredQuestions];
            updatedAnsweredQuestions[currentQuestion] = true;
            return updatedAnsweredQuestions;
        });
    };

    // Function to handle selecting a question from the question list
    const handleSelectQuestion = (index) => {
        setCurrentQuestion(index);
        setVisitedQuestions((prevVisitedQuestions) => {
            const updatedVisitedQuestions = [...prevVisitedQuestions];
            updatedVisitedQuestions[index] = true;
            return updatedVisitedQuestions;
        });
    };

    // Function to navigate to the next question
    const handleNextQuestion = () => {
        const nextQuestionIndex = currentQuestion + 1;
        if (nextQuestionIndex < questions.length) {
            setCurrentQuestion(nextQuestionIndex);
            setVisitedQuestions((prevVisitedQuestions) => {
                const updatedVisitedQuestions = [...prevVisitedQuestions];
                updatedVisitedQuestions[currentQuestion] = true;
                return updatedVisitedQuestions;
            });
            setAnsweredQuestions((prevAnsweredQuestions) => {
                const updatedAnsweredQuestions = [...prevAnsweredQuestions];
                updatedAnsweredQuestions[currentQuestion] = true;
                return updatedAnsweredQuestions;
            });
        }
    };

    // Function to navigate to the previous question
    const handlePreviousQuestion = () => {
        if (currentQuestion >= 1) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    // Function to handle submitting the quiz
    const handleSubmitQuiz = async () => {
        const userAnswers = [...selectedAnswers]; // Copy selected answers

        // Dispatch the async action to set selectedAnswers in Redux
        await dispatch(setSelectedAnswersAsync(userAnswers));

        // Navigate to the report page
        router.push('/report');
    };

    // Function to handle timeout when the timer ends
    const handleTimeout = async () => {
        const userAnswers = [...selectedAnswers]; // Copy selected answers

        // Dispatch the async action to set selectedAnswers in Redux
        await dispatch(setSelectedAnswersAsync(userAnswers));

        // Navigate to the report page
        router.push('/report');
    };

    return (
        <div className="quiz-container px-10 pt-2 h-screen ">
            {!quizStarted ? (
                // Render the start page if the quiz hasn't started
                <StartPage onStart={handleStartQuiz} />
            ) : (
                questions.length > 0 ? (
                    // Render quiz components if there are questions available
                    <>
                        {/* Header with quiz information and timer */}
                        <div className='flex justify-between'>
                            <div className="flex items-center mb-4 ">
                                <img src="logo.svg" alt="" className='w-20 h-20'/>
                            </div>
                            <div className="flex items-center mb-4 mr-2 ">
                                <span className="mr-2 text-gray-600 font-bold"> Quiz</span>
                            </div>
                            <div className="flex items-center mb-4 mr-2 ">
                                <span className="mr-2 text-gray-600 font-bold">Time Remaining:</span>
                                <Timer onTimeout={handleTimeout} />
                            </div>
                        </div>

                        {/* Main content with the current question and question list */}
                        <div className="flex justify-between">
                            <div className="w-11/12 pr-10">
                                <Question
                                    currentQuestion={currentQuestion}
                                    question={questions[currentQuestion]?.question}
                                    options={[
                                        ...questions[currentQuestion]?.incorrect_answers,
                                        questions[currentQuestion]?.correct_answer,
                                    ]}
                                    selectedAnswer={selectedAnswers[currentQuestion]}
                                    onSelect={handleSelectAnswer}
                                />
                                <div className='flex justify-end mr-6 gap-2'>
                                    {/* Button to navigate to the previous question */}
                                    {currentQuestion >= 1 && (
                                        <button
                                            onClick={handlePreviousQuestion}
                                            className="mt-6 px-4 py-2 rounded-lg bg-orange-500 text-white"
                                        >
                                            Back
                                        </button>
                                    )}
                                    {/* Button to navigate to the next question */}
                                    {currentQuestion < 14 && (
                                        <button
                                            onClick={handleNextQuestion}
                                            className={`mt-6 px-4 py-2 ${
                                                answeredQuestions[currentQuestion] ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'
                                            } rounded-lg`}
                                            disabled={!answeredQuestions[currentQuestion]}
                                        >
                                            Next
                                        </button>
                                    )}
                                    {/* Button to submit the quiz */}
                                    {currentQuestion === questions.length - 1 && (
                                        <button
                                            onClick={handleSubmitQuiz}
                                            className={`mt-6 px-4 py-2 ${
                                                selectedAnswers.length > 14 ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
                                            } rounded-lg`}
                                            disabled={!(selectedAnswers.length > 14)}
                                        >
                                            Submit Quiz
                                        </button>
                                    )}
                                </div>
                            </div>
                            {/* Question list sidebar */}
                            <div className=" items-start">
                                <QuestionList
                                    questions={questions}
                                    currentQuestion={currentQuestion}
                                    onSelectQuestion={handleSelectQuestion}
                                    visitedQuestions={visitedQuestions}
                                    answeredQuestions={answeredQuestions}
                                />
                            </div>
                        </div>
                    </>
                ) : (
                    // Render a loading screen if there are no questions available
                    <div className="flex justify-center items-center h-screen">
                        <div className="flex flex-col text-center">
                            <h4 className="mb-8">Please Wait ...</h4>
                            <div className="flex flex-row space-x-4">
                                <div className="w-12 h-12 rounded-full animate-spin border-y border-solid border-yellow-500 border-t-transparent"></div>
                                <div className="w-12 h-12 rounded-full animate-spin border-y-2 border-solid border-blue-500 border-t-transparent"></div>
                                <div className="w-12 h-12 rounded-full animate-spin border-y-4 border-solid border-green-500 border-t-transparent"></div>
                                <div className="w-12 h-12 rounded-full animate-spin border-y-8 border-solid border-purple-500 border-t-transparent"></div>
                            </div>
                        </div>
                    </div>
                )
            )}
        </div>
    );
};

export default IndexPage;
