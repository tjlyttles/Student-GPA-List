import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";

const DeleteAlert = ({ setShowAlert, student, students }) => {
  const handleDelete = id => {
    console.log("im clicked", id);

    students.data = students.data.filter(student => student._id !== id);
    let newData = students;
    let data = JSON.stringify(newData);

    API.getStudents({ data }).catch(err => console.log(err));
  };

  return (
    <tr>
      <td colSpan="9" style={{ padding: "0" }}>
        <Alert
          key={student}
          variant="danger"
          onClose={() => setShowAlert(false)}
          dismissible
          style={{ marginBottom: "0" }}
        >
          <Row>
            <Col md={{ offset: 2 }}>
              <h6>Are you sure you want to delete this student record?</h6>
            </Col>{" "}
            <Col>
              <Button
                size="sm"
                className="btn-danger"
                onClick={() => handleDelete(student._id)}
              >
                Yes
              </Button>
            </Col>
          </Row>
        </Alert>
      </td>
    </tr>
  );
};

export default DeleteAlert;
