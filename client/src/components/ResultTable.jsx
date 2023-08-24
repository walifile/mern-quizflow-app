import React from "react";
const data = [""];
const ResultTable = () => {
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
                <td>wali</td>
                <td>0</td>
                <td>3</td>
                <td>passwec</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResultTable;
