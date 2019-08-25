import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const greenHighlight = {
  backgroundImage:
    "linear-gradient(to right, #aaff80 0, #aaff80 85.1%, transparent 75%)"
};
const redHighlight = {
  backgroundImage:
    "linear-gradient(to right, #ff4d4d 0, #ff4d4d 85.1%, transparent 75%)"
};

const TableData = ({ students }) => {
  const gradeMap = {
    A: 4,
    B: 3,
    C: 2,
    D: 1,
    F: 0
  };

  const getGpa = grades => {
    return grades.reduce((total, grade) => {
      grade = gradeMap[grade.slice(-1)];

      return (total += grade / 4);
    }, 0);
  };

  const createRow = (_id, name, athlete, math, history, science, english, grades) => {
    const averageGpa = getGpa(grades);

    return { _id, name, athlete, math, history, science, english, averageGpa };
  };

  const rows = students.data.map(student =>
    createRow(
      student._id,
      student.name,
      student.athlete,
      student.grades[0].slice(-1),
      student.grades[1].slice(-1),
      student.grades[2].slice(-1),
      student.grades[3].slice(-1),
      student.grades
    )
  );
  const highest = rows.reduce((previous, student) => {
    return (previous || 0) > student.averageGpa ? previous : student.averageGpa;
  }, 0);

  const lowest = rows.reduce((prev, student) => {
    return (prev || 0) < student.averageGpa ? prev : student.averageGpa;
  }, 4);

  // console.log(lowest);
  // console.log(highest);

  return (
    <Card>
      <div>
        {rows && (
          <Table responsive size="sm">
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th>#</th>
                <th>Name</th>
                <th>Athlete</th>
                <th>Math</th>
                <th>History</th>
                <th>Science</th>
                <th>English</th>
                <th>GPA</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              {rows.map(row => (
                <tr
                  key={row._id}
                  style={
                    parseFloat(row.averageGpa) === highest
                      ? greenHighlight
                      : parseFloat(row.averageGpa) === lowest
                      ? redHighlight
                      : null
                  }
                >
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
                  <td>
                    <Button size="sm" variant="outline-dark">
                      <span role="img" aria-label="edit">
                        {" "}
                        🖊
                      </span>
                    </Button>{" "}
                    <Button size="sm" variant="outline-danger">
                      <span role="img" aria-label="edit">
                        ❌
                      </span>
                    </Button>{" "}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </Card>
  );
};

export default TableData;
