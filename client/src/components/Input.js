import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Toast from "react-bootstrap/Toast";
import TableData from "../components/TableData";
import { data } from "../students.json";

const Input = () => {
  const students = { data };
  const [show, setShow] = useState(false);
  const [state, setState] = useState({
    name: "",
    grades: [],
    mathGpa: "",
    historyGpa: "",
    scienceGpa: "",
    englishGpa: ""
  });
  const { name, grades, mathGpa, historyGpa, scienceGpa, englishGpa } = state;

  let id = data[data.length - 1]._id;

  const gradesCheck = /^[A-DFa-df]/;
  const letters = /^[A-Za-z]+$/;

  const handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted");
    grades.push(
      `Math - ${mathGpa}`,
      `History - ${historyGpa}`,
      `Science - ${scienceGpa}`,
      `English - ${englishGpa}`
    );
    id++;
    let newStudent = { _id: id, name: name, grades: grades };
    students.data.push(newStudent);
    console.log(students.data);
    setState({
      ...state,
      name: "",
      grades: [],
      mathGpa: "",
      historyGpa: "",
      scienceGpa: "",
      englishGpa: ""
    });
  };
  const handleName = e => {
    setState({
      ...state,
      [e.target.name]:
        e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
    });

    if (!e.target.value.match(letters)) {
      setState({ ...state, [e.target.name]: "" });
      e.target.value = "";
    }
  };

  const handleGrade = e => {
    setState({ ...state, [e.target.name]: e.target.value.toUpperCase() });

    if (!e.target.value.match(gradesCheck)) {
      setState({ ...state, [e.target.name]: "" });
      e.target.value = "";
      setShow(true);
    }
  };

  return (
    <div style={{ margin: "40px" }}>
      {" "}
      <Card>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label style={{ fontWeight: "bold" }}>
              {" "}
              Enter Student's Name and Grades:
            </Form.Label>
            <Form.Row>
              <Col>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={name || ""}
                  onChange={handleName}
                  size="sm"
                  placeholder="Name"
                  required
                />
              </Col>

              <Col>
                {" "}
                <Form.Label>Math</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="1"
                  name="mathGpa"
                  value={mathGpa || ""}
                  onChange={handleGrade}
                  size="sm"
                  placeholder="Math"
                  required
                />
              </Col>
              <Col>
                {" "}
                <Form.Label>History</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="1"
                  name="historyGpa"
                  value={historyGpa || ""}
                  onChange={handleGrade}
                  size="sm"
                  placeholder="History"
                  required
                />
              </Col>
              <Col>
                {" "}
                <Form.Label>Science</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="1"
                  name="scienceGpa"
                  value={scienceGpa || ""}
                  onChange={handleGrade}
                  size="sm"
                  placeholder="Science"
                  required
                />
              </Col>
              <Col>
                {" "}
                <Form.Label>English</Form.Label>
                <Form.Control
                  type="text"
                  maxLength="1"
                  name="englishGpa"
                  value={englishGpa || ""}
                  onChange={handleGrade}
                  size="sm"
                  placeholder="English"
                  required
                />
              </Col>
            </Form.Row>

            <br />
            <Button type="submit" variant="outline-primary" size="sm">
              Add Student
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Body>Please only enter grade values.</Toast.Body>
          </Toast>
        </Col>
      </Row>
      <TableData students={students} />
    </div>
  );
};

export default Input;
