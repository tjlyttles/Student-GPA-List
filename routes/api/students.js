'use strict';

const fs = require('fs');
const router = require("./node_modules/express").Router();


router.post('/', async(req, res) => {
   
    fs.writeFile("../../desktop/student-gpa-list/client/src/students.json", req.body.data, err => {
        if(err) {
            console.log("error writing file", err)
        } else {
            
            console.log("It friggen works!!")
        }
    });
})
router.delete('/:id', async(req, res) => {
    
    fs.writeFile("../../desktop/student-gpa-list/client/src/students.json", req.body.data, err => {
        if(err) {
            console.log("error writing file", err)
        } else {
            
            console.log("It friggen works!!")
        }
    });
})
              

module.exports = router