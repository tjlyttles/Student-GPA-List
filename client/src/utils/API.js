import axios from "axios";

export default {
  
  getStudents: function(studentData) {
    return axios.post("/api/students", studentData);
  }
};
