import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const Question = ({ question, options, onSelect, selectedAnswer, currentQuestion }) => {
  // Function to handle the selection of an answer option
  const handleOptionSelect = (option) => {
    onSelect(option); // Call the onSelect callback passed from IndexPage.js
  };

  // Utility function to handle CSS classes
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="question p-4 sm:p-8 bg-white shadow-md rounded-3xl mb-2">
      <div className="flex text-xl mb-4 sm:mb-6">
        <div className="font-semibold">Q{currentQuestion + 1}. {question}</div>
      </div>
      {/* RadioGroup for answer options */}
      <RadioGroup value={selectedAnswer} onChange={handleOptionSelect}>
        <div className="space-y-4">
          {options.map((option, index) => (
            // Individual answer option
            <RadioGroup.Option
              key={option.id} // Assuming option has an ID for unique identification
              value={option}
              className={({ active }) =>
                classNames(
                  active ? 'ring-2 ring-green-600' : 'border-gray-200',
                  'relative block rounded-3xl cursor-pointer rounded-lg border bg-white px-4 sm:px-6 py-3 sm:py-4 shadow-sm focus:outline-none sm:flex sm:justify-between transition duration-300'
                )
              }
            >
              {({ active, checked }) => (
                <>
                  <span className="flex items-center">
                    <span className="text-xl">{index + 1}.</span>
                    <span className="flex flex-col ml-2 sm:ml-3">
                      {/* Display the answer option */}
                      <RadioGroup.Label as="span" className="font-medium text-gray-900">
                        {option}
                      </RadioGroup.Label>
                    </span>
                  </span>
                  {/* Display "Selected" if this option is selected */}
                  {selectedAnswer === option && (
                    <span className="ml-2 sm:ml-3 text-green-600">Selected</span>
                  )}
                </>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  );
};

export default Question;
