import React, { useState, useEffect } from "react";
const baseURL = "http://localhost:5000";
import { getServerData } from "../helper/helper";
const ResultTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getServerData(`${baseURL}/api/result`, (res) => {
      setData(res);
    });
  });
  return (
    <>
      <div>
        <table>
          <thead className="table-header">
            <tr className="table-row">
              <td>Name</td>
              <td>Attemps</td>
              <td>Earn Points</td>
              <td>Result</td>
            </tr>
          </thead>
          <tbody>
            {!data ?? <div>No Data Found </div>}
            {data.map((v, i) => (
              <tr className="table-body" key={i}>
                <td>{v?.username || ""}</td>
                <td>{v?.attempts || 0}</td>
                <td>{v?.points || 0}</td>
                <td>{v?.achived || ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultTable;
