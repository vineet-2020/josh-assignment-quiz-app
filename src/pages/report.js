import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

const ReportPage = () => {
  const router = useRouter();
  const { questions } = useSelector((state) => state.quiz);
  const selectedAnswers = useSelector((state) => state.quiz.selectedAnswers);
  
  console.log(selectedAnswers);

  return (
    <div className="p-4">
    <h1 className="text-3xl font-semibold mb-6">Quiz Report</h1>
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Questions and Answers:</h2>
      {questions.map((question, index) => (
        <div key={index} className="mb-6 p-4 bg-white shadow-md rounded-md">
          <p className="mb-2 text-lg">
            <span className="font-semibold">Question {index + 1}: </span>
            {question.question}
          </p>
          <div className='flex items-start'>
          <div className=" sm:flex-row sm:items-center">
            <div className="mb-2 sm:mb-0">
              <p className="font-medium">Your Answer:</p>
              <p className=''>{selectedAnswers[index]}</p>
            </div>
            <div className="mt-2 ">
              <p className="font-medium">Correct Answer:</p>
              <p>{question.correct_answer}</p>
            </div>
          </div>
          </div>
          
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ReportPage;
