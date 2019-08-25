import axios from "axios";
import students from "../students.json"

export default {
  
  getStudents: function() {
    return axios.get("/api/students");
  },

  
  deleteStudent: function(id) {
    return delete students.data[id]
    //axios.delete("/api/students/" + id);
  },
  
  saveStudent: function(studentData) {
    return axios.post("/api/students", studentData);
  }
};
