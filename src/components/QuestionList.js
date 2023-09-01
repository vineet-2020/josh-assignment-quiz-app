import React from 'react';

const QuestionList = ({ questions, currentQuestion, onSelectQuestion, visitedQuestions, answeredQuestions }) => {
    return (
        <div className="">
            <div className='px-10 pb-12 gap-2 border rounded-3xl bg-white'>
                {/* Header for question selection */}
                <div className="text-lg my-5 text-center">Select a Question {currentQuestion}</div>

                {/* Grid to display question buttons */}
                <div className="grid grid-cols-4 gap-6">
                    {questions.map((_, index) => (
                        <div className="flex justify-center items-center" key={index}>
                            <button
                            
                                onClick={() => onSelectQuestion(index)} // Function to select a question
                                type="button"
                                className={`shadow-sm rounded-full border border-gray-500 p-3 text-center w-10 h-10 flex items-center justify-center ${
                                    index === currentQuestion ? 'bg-orange-500 border-2 text-white border-orange-600' : '' // Highlight current question
                                } ${
                                    visitedQuestions[index] && !answeredQuestions[index]
                                        ? 'bg-purple-400 text-white border-2 border-purple-600' : '' // Highlight visited but unanswered questions
                                } ${
                                    answeredQuestions[index] ? 'bg-green-500 text-white border-2 border-green-600' : '' // Highlight attempted questions
                                }`}
                            >
                                {/* Display question number */}
                                {index + 1 < 10 ? (
                                    <span>0{index + 1}</span>
                                ) : (
                                    <span>{index + 1}</span>
                                )}
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend for question status */}
            <div className='p-4 '>
                <h2 className='font-semibold text-lg mb-2 px-6'>Legend:</h2>
                <div className='flex grid grid-cols-2 gap-2 my-2 px-6'>
                    <div className='flex items-center'>
                        <span className='mr-2 w-5 h-5 bg-orange-500 rounded-full p-2'></span>
                        <p className='text-sm font-medium'>Current</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='mr-2 w-5 h-5 bg-purple-500 rounded-full p-2'></span>
                        <p className='text-sm font-medium'>Visited</p>
                    </div>
                    <div className='flex items-center'>
                        <span className='mr-2 w-5 h-5 bg-green-500 rounded-full p-2'></span>
                        <p className='text-sm font-medium'>Attempted</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionList;
