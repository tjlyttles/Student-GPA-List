import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const DeleteAlert = ({setShowAlert}) => {

    // const handleDelete = id => {
    //     console.log("im clicked", id)
    //     API.deleteStudent(id).catch(err => console.log(err));
    //   }
    
  return (
    <Alert
      variant="danger"
      onClose={() => setShowAlert(false)}
      dismissible
      style={{ marginBottom: 0 }}
    >
      <Alert.Heading>Are you sure you want to delete this student record?</Alert.Heading>
      <Button className="btn-danger" >
        Not functioning atm.
      </Button>
    </Alert>
  );
};

export default DeleteAlert;
