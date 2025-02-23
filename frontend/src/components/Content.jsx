import { useState, useEffect } from "react";
import { QuizSection } from "./QuizSection"; 
import { ContentItem } from "./ContentItem"; 

export const Content = ({ data,setTopicIndex,topicIndex }) => {
  const [contentData, setContentData] = useState(data || {});
  const [topicData, setTopicData] = useState({});
  const [contentList, setContentList] = useState([]);
  const [quizData, setQuizData] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (data && data.topics && data.topics.length > 0) {
      const topic = data.topics[topicIndex] || {};
      setContentData(data);
      setTopicData(topic);
      setContentList(topic.items || []);
      setQuizData(topic.quiz?.questions || []);
      setLoading(false);
    }
  }, [data, topicIndex]);

  const handleNextClick = () => {

    if (topicData?.isQuiz && !topicData?.complete) {
      if (currentQuizIndex >= quizData.length) {
        const nextSection = data.topics?.find((section) => section !== topicData) || {};
        setTopicData(nextSection);
        setContentList(nextSection.items || []);
        setQuizData(nextSection.quiz?.questions || []);
        setCurrentQuizIndex(0); 
      }
    } else if (topicData?.isQuiz && topicData?.complete) {
      setTopicIndex(topicIndex + 1);
    } else {
      setTopicData((prevState) => ({
        ...prevState,
        complete: true,
        isQuiz: false,
      }));
    }
  };

  const handleQuizAnswer = (selectedAnswer) => {
    const currentQuestion = quizData[currentQuizIndex];
    setQuizAnswer(selectedAnswer);
    setIsAnswerCorrect(selectedAnswer === currentQuestion.answer);
  };

  const handleQuizNext = () => {
    if (currentQuizIndex + 1 < quizData.length) {
      setCurrentQuizIndex(currentQuizIndex + 1); 
      setQuizAnswer(""); 
      setIsAnswerCorrect(null); 
    } else {
      setTopicData((prevState) => ({
        ...prevState,
        complete: true,
        isQuiz: true,
      }));
    }
  };

  if (loading) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex items-center justify-between max-w-xl mb-10 text-center md:mx-auto lg:max-w-2xl md:mb-12">
        <h2 className="max-w-lg mx-auto mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          {contentData?.language} {topicData?.name} {topicData?.complete && !topicData?.isQuiz ? "Quiz" : ''}
        </h2>
        <button
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          aria-label="Next"
          title="Next"
          onClick={handleNextClick}
        >
          {topicData?.isQuiz && currentQuizIndex >= quizData.length ? "Next Topic" : topicData?.complete ? "Next Topic" : "Next"}
        </button>
      </div>

      {/* Content Section */}
      {!topicData?.complete && (
        <div className="grid max-w-screen-lg gap-4 lg:grid-cols-4 lg:divide-x lg:w-fit">
          {!topicData?.complete &&
            contentList.map((content, index) => (
              <ContentItem key={index} translation={content.translation} word={content.word} tanlish={content.tanlish} />
            ))}
        </div>
      )}

      {/* Quiz Section */}
      {topicData?.complete && !topicData?.isQuiz ? (
        <QuizSection
          quizData={quizData}
          currentQuizIndex={currentQuizIndex}
          handleQuizAnswer={handleQuizAnswer}
          isAnswerCorrect={isAnswerCorrect}
          quizAnswer={quizAnswer}
          handleQuizNext={handleQuizNext}
        />
      ) : topicData?.complete && topicData?.isQuiz ? (
        <p>All Quiz completed - Next Topic</p>
      ) : null}
    </div>
  );
};
