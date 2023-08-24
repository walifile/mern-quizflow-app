import React from "react";
import ResultTable from "../components/ResultTable";
import { Link } from "react-router-dom";
const Result = () => {
  const onRestart = () => {};
  return (
    <>
      <div className="container">
        <h1 className="title text-light">Quiz Application</h1>

        <div className="result flex-center">
          <div className="flex">
            <span>Username</span>
            <span className="bold">wali</span>
          </div>
          <div className="flex">
            <span>Total Quiz Points : </span>
            <span className="bold">30</span>
          </div>
          <div className="flex">
            <span>Total Questions : </span>
            <span className="bold">30</span>
          </div>
          <div className="flex">
            <span>Total Attempts : </span>
            <span className="bold">20</span>
          </div>

          <div className="flex">
            <span>Total Earn Points : </span>
            <span className="bold">10</span>
          </div>
          <div className="flex">
            <span>Quiz Result</span>
            <span
              style={{ color: `${true ? "#2aff95" : "#ff2a66"}` }}
              className="bold"
            >
              Paassed
            </span>
          </div>
        </div>

        <div className="start">
          <Link className="btn" to={"/"} onClick={onRestart}>
            Restart
          </Link>
        </div>

        <div className="container">
          {/* result table */}
          <ResultTable></ResultTable>
        </div>
      </div>
    </>
  );
};

export default Result;
