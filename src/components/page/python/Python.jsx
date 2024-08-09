import React, { useState } from 'react';

const QuestionCard = ({ questionData, onAnswerSelect }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerClick = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      onAnswerSelect({ questionId: questionData.id, answer: selectedAnswer });
      setSelectedAnswer(null); // Reset the selected answer for the next question
    }
  };

  return (
    <div className="border border-gray-300 p-6 my-4 rounded-lg shadow-lg overflow-hidden">
      <h3 className="text-xl font-semibold mb-4">{questionData.question}</h3>
      <div className="space-y-2">
        {[questionData.variant1, questionData.variant2, questionData.variant3, questionData.variant4].map((variant, index) => (
          <button
            key={index}
            onClick={() => handleAnswerClick(variant)}
            className={`w-full py-2 px-4 rounded-lg border ${
              selectedAnswer === variant ? 'bg-gray-300' : 'bg-white'
            } hover:bg-gray-100`}
          >
            {variant}
          </button>
        ))}
      </div>
      <button
        onClick={handleNextQuestion}
        className="mt-6 w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
      >
        Next Question
      </button>
    </div>
  );
};

const PythonPage = () => {
  const pythonData = JSON.parse(localStorage.getItem('data')); // Retrieve the data from localStorage
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]); // State to hold all answers
  const [showCard, setShowCard] = useState(true); // State to control the visibility of the card
  const [finished, setFinished] = useState(false); // State to check if quiz is finished

  if (!pythonData || pythonData.length === 0) {
    return <div className="text-center text-gray-500 my-[43vh]">No data available</div>;
  }

  const handleAnswerSelect = (answer) => {
    setAnswers([...answers, answer]); // Append the new answer to the answers state

    if (currentQuestionIndex < pythonData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setFinished(true); // Mark as finished if it's the last question
    }
  };

  const handleFinalClick = () => {
    submitAnswers(); // Submit the answers
    setShowCard(false); // Hide the card
  };

  const submitAnswers = async () => {
    const token = localStorage.getItem('token');

    if (token) {
      try {
        const response = await fetch('https://sunnatakbarov0104.pythonanywhere.com/api/v1/pass_exam/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          },
          body: JSON.stringify({ answers }), // Send the accumulated answers
        });

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        // Handle successful submission
        console.log('Answers submitted successfully!');
      } catch (error) {
        console.error('Error submitting answers:', error);
        // Handle submission error
      }
    }
  };

  return (
    <div className="container mx-auto p-4 overflow-hidden">
      {showCard && !finished && (
        <QuestionCard
          questionData={pythonData[currentQuestionIndex]}
          onAnswerSelect={handleAnswerSelect}
        />
      )}
      {finished && showCard && (
        <div className="text-center">
          <button
            onClick={handleFinalClick}
            className="mt-6 w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Yopish
          </button>
        </div>
      )}
      {!showCard && (
        <div className="text-center my-[43vh]">
          <h1 className="text-2xl font-bold">So'rovingiz muvaffaqqiyatli yuboridi!</h1>
        </div>
      )}
    </div>
  );
};

export default PythonPage;
