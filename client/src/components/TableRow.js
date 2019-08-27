import React, { useState, Fragment } from "react";
// import Button from "react-bootstrap/Button";
import DeleteAlert from "./DeleteAlert";

const TableRow = ({ row, students }) => {
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Fragment>
      {showAlert ? (
        <DeleteAlert student={row} setShowAlert={setShowAlert} students={students} />
      ) : (
        <Fragment>
          {" "}
          <tr style={{ textAlign: "center" }}>
            <td>{row._id}</td>
            <td>{row.name}</td>
            <td>
              <input
                disabled
                checked={row.athlete ? true : false}
                type={`radio`}
                id={`disabled-custom-radio`}
              />
            </td>
            <td>{row.math}</td>
            <td>{row.history}</td>
            <td>{row.science}</td>
            <td>{row.english}</td>
            <td>{row.averageGpa.toFixed(2)}</td>
            {/* <td>
              <Button size="sm" variant="outline-dark">
                <span role="img" aria-label="edit">
                  {" "}
                  🖊
                </span>
              </Button>{" "}
              <Button
                onClick={() => setShowAlert(true)}
                size="sm"
                variant="outline-danger"
              >
                <span role="img" aria-label="delete">
                  ❌
                </span>
              </Button>{" "}
            </td> */}
          </tr>
        </Fragment>
      )}
    </Fragment>
  );
};

export default TableRow;
