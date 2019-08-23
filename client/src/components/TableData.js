import React from "react";
import Table from "react-bootstrap/Table";

const greenHighlight = {
  backgroundColor: " #aaff80"
};
const redHighlight = {
  backgroundColor: "#ff4d4d"
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
    return grades
       .reduce((total, grade) => {
         grade = gradeMap[grade.slice(-1)];
        
        return total += grade / 4;
       }, 0);
   };

  const createRow = (_id, name, math, history, science, english, grades) => {
    const averageGpa = getGpa(grades);
    
    return { _id, name, math, history, science, english, averageGpa };
  };

  const rows = 
    students.data.map(student =>
      createRow(
        student._id,
        student.name,
        student.grades[0].slice(-1),
        student.grades[1].slice(-1),
        student.grades[2].slice(-1),
        student.grades[3].slice(-1),
        student.grades
      )
    )
  ;
  

  const highest = rows.reduce((previous, student) => {
    return (previous || 0) > student.averageGpa
      ? previous
      : student.averageGpa;
  }, 0);

  const lowest = rows.reduce((prev, student) => {
    return (prev || 0) < student.averageGpa
      ? prev
      : student.averageGpa;
  }, 4);

  console.log(lowest);
  console.log(highest);

  return (
    <div style={{ margin: "40px" }}>
      {rows && (
        <Table responsive size="sm">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th>#</th>
              <th>Name</th>
              <th>Math</th>
              <th>History</th>
              <th>Science</th>
              <th>English</th>
              <th>GPA</th>
            </tr>
          </thead>
          <tbody style={{ textAlign: "center" }}>
            {rows.map(row => (
              <tr
                key={row._id}
                style={
                  parseFloat(row.averageGpa) === highest
                    ? greenHighlight
                    : parseFloat(row.averageGpa) === lowest ? redHighlight : null
                }
              >
                <td>{row._id}</td>
                <td>{row.name}</td>
                <td>{row.math}</td>
                <td>{row.history}</td>
                <td>{row.science}</td>
                <td>{row.english}</td>
                <td>{row.averageGpa}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default TableData;

