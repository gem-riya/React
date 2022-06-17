import React, { useState } from "react";
import { useLocation } from "react-router-dom";
const QuestionUpload = () => {
  const location = useLocation();

  const [question, setQuestion] = useState({
    title: "",
    question: "",
    A: "",
    B: "",
    C: "",
    D: "",
    answer: "",
  });

  const [isAdded, setIsAdded] = useState(false);

  const [addQuestionDetails, setAddQuestionDetails] = useState([]);

  const inputEvent = (event) => {
    const { name, value } = event.target;
    setQuestion((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
    setIsAdded(false);
  };

  const addEvent = (e) => {
    setAddQuestionDetails((prevData) => {
      return [...prevData, question];
    });
    setIsAdded(true);
    document.getElementById("form").reset();
  };

  const addTOStorage = () => {
    localStorage.setItem(
      location.state.user + `${question.title}`,
      JSON.stringify(addQuestionDetails)
    );
    alert("congratulations");
    setAddQuestionDetails([]);
  };
  return (
    <>
    <div class="p-3 mb-2 bg-success text-white">
      <div className="container-fluid ">
        <div className="row mt-4">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center  h1">
            Start Making Your Quiz 
          </div>
          <div className="col-md-4"></div>
        </div>
        {isAdded ? (
          <h5 className="text-bg-success">Question is Added</h5>
        ) : null}
        <form className="mt-5" id="form">
          <div className="row">
            <label
              htmlFor="quiz_name"
              className="form-check-label col-md-6 h5"
            >
               Quiz Name
            </label>
            <input
              type="text"
              id="quiz_name"
              name="title"
              value={question.title}
              onChange={inputEvent}
              className="col-md-8"
              placeholder="enter name of your quiz"
            ></input>
          </div>
          <div className="row mt-3">
            <label htmlFor="question" className="form-check-label col-md-6 h5">
              Enter Question
            </label>
            <textarea
              rows=""
              id="question"
              name="question"
              columns=""
              value={question.question}
              className="form-text col-md-8"
              placeholder="Write a Question"
              onChange={inputEvent}
            />
            <div className="container d-flex flex-column justify-content-center align-items-left">
              <input
                placeholder="A"
                name="A"
                className="mt-4 w-25"
                type="text"
                value={question.A}
                onChange={inputEvent}
              />
              <input
                placeholder="B"
                name="B"
                type="text"
                className="mt-3 w-25"
                value={question.B}
                onChange={inputEvent}
              />
              <input
                placeholder="C"
                name="C"
                type="text"
                className="mt-3 w-25"
                value={question.C}
                onChange={inputEvent}
              />
              <input
                placeholder="D"
                name="D"
                type="text"
                className="mt-3 w-25"
                value={question.D}
                onChange={inputEvent}
              />
              <input
                placeholder="Enter the Correct ansnwer"
                name="answer"
                type="text"
                className="mt-3 w-25"
                value={question.answer}
                onChange={inputEvent}
              ></input>

              <div
                type="submit"
                onClick={addEvent}
                className="btn btn-primary mt-4"
                style={{ marginLeft: "1px",
                backgroundColor: "pink",
                padding: "4px",
                width:"70px"
                }}


              >
                Add Question
              </div>
              <div
                type="submit"
                className="btn btn-primary mt-4 "
                onClick={addTOStorage}
                style={{ marginLeft: "1px",
                backgroundColor: "pink",
                padding: "4px",
                width:"70px"

                
                 }}
              >
                Make Quiz
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default QuestionUpload;
