import axios from "axios";

export default {
  
  getStudents: function() {
    return axios.get("/api/students");
  },

  
  deleteStudent: function(id) {
    return axios.delete("/api/students/" + id);
  },
  
  saveStudent: function(studentData) {
    return axios.post("/api/students", studentData);
  }
};
