import React from "react";

const Check  = ({ onClose, results, data }) => {
  return (
      <>
    <div className="check" tabIndex={"-1"} id="staticBackdrop">
     
      <div className="check-dialog" onClick={onClose}></div>
      <div className="check-content">
        <header className="check-header">
          <p className="check-title">Your answers</p>
          <button className="delete" onClick={onClose}></button>
        </header>
        <section className="check-body content">
          <ul>
            {results.map((result, i) => (
              <li key={i} className="mb-6">
                <p>
                  <strong>{result.q}</strong>
                </p>
                <p
                  className={
                    result.a === data[i].answer
                      ? "bg-success text-white p-2"
                      : "bg-danger text-white p-2"
                  }
                >
                  Your answer: {result.a}
                </p>
                {result.a !== data[i].answer && (
                  <p className="bg-link text-white p-2">
                    Correct answer: {data[i].answer}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
    </>
  );
};

export default Check;
