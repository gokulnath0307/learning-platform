export const QuizSection = ({ quizData, currentQuizIndex, handleQuizAnswer, isAnswerCorrect, handleQuizNext, quizComplete }) => {
  const currentQuestion = quizData[currentQuizIndex];

  return (
    <div>
      {!quizComplete ? (
        <>
          <div>
            <h3>{currentQuestion.question}</h3>
            {currentQuestion.options.map((option, index) => (
              <button key={index} onClick={() => handleQuizAnswer(option)} className="px-4 py-2 border rounded-md">
                {option}
              </button>
            ))}
          </div>
          {isAnswerCorrect !== null && (
            <div>
              <p className={`text-lg font-semibold ${isAnswerCorrect ? "text-green-800" : "text-red-800"} `}>
                {isAnswerCorrect ? "Correct!" : "Incorrect!"}
              </p>
              {!isAnswerCorrect && (
                <p>
                  The correct answer is: <span className="text-lg font-semibold text-green-700">{currentQuestion.answer}</span>
                </p>
              )}
            </div>
          )}
          <button onClick={handleQuizNext} disabled={isAnswerCorrect === null} className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-md">
            Next
          </button>
        </>
      ) : (
        <p>All Quiz completed - Next Topic</p>
      )}
    </div>
  );
};
