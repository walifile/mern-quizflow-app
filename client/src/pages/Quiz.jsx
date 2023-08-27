import React, { useState } from "react";
import Questions from "../components/Questions";
import { MoveNextQuestion, MovePrevQuestion } from "../hooks/FetchQuestion";
import { PushAnswer } from "../hooks/setResult";

/** redux store import */
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const Quiz = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.result.result);
  const { queue, trace } = useSelector((state) => state.questions);

  const onPrev = () => {
    if (trace > 0) {
      /** decrease the trace value by one using MovePrevQuestion */
      dispatch(MovePrevQuestion());
    }
  };
  const onNext = () => {
    if (trace < queue.length) {
      /** increase the trace value by one using MoveNextAction */
      dispatch(MoveNextQuestion());

      /** insert a new result in the array.  */
      if (result.length <= trace) {
        dispatch(PushAnswer(check));
      }
    }
  };

  /** finished exam after the last question */
  if (result.length && queue.length > 0 && result.length >= queue.length) {
    return <Navigate to={"/result"} replace={true}></Navigate>;
  }

  return (
    <>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        {/* display questions */}
        <Questions />

        <div className="grid">
          {trace > 0 ? (
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
