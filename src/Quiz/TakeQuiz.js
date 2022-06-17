import React from "react";
import Start from "./Start";
import { useLocation } from "react-router-dom";
import Question from "./Question";
import Result from "./Result";
import Check from "./Check";
import { useState, useEffect } from "react";
const TakeQuiz = () => {
  let interval;

  const location = useLocation();

  const quizData = location.state.arr;

  const [step, setStep] = useState(1);

  const [activeQuestion, setActiveQuestion] = useState(0);

  const [answers, setAnswers] = useState([]);

  const [showCheck, setShowCheck] = useState(false);

  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
      {step === 1 && <Start onQuizStart={quizStartHandler} />}
      {step === 2 && (
        <Question
          data={quizData[activeQuestion]}
          onAnswerUpdate={setAnswers}
          numberOfQuestions={quizData.length}
          activeQuestion={activeQuestion}
          onSetActiveQuestion={setActiveQuestion}
          onSetStep={setStep}
        />
      )}
      {step === 3 && (
        <Result
          results={answers}
          data={quizData}
          onReset={resetClickHandler}
          onAnswersCheck={() => setShowCheck(true)}
          time={time}
        />
      )}

      {showCheck && (
        <Check
          onClose={() => setShowCheck(false)}
          results={answers}
          data={quizData}
        />
      )}
    </div>
  );
};

export default TakeQuiz;
