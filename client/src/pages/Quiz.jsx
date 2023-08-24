import React from "react";
import Questions from "../components/Questions";
const Quiz = () => {
  const onChecked = () => {};
  const onPrev = () => {};
  const onNext = () => {};
  return (
    <>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        {/* display questions */}
        <Questions onChecked={onChecked} />

        <div className="grid">
          {true ? (
            <button className="btn prev" onClick={onPrev}>
              Prev
            </button>
          ) : (
            <div></div>
          )}
          <button className="btn next" onClick={onNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Quiz;
