var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const Student = require('../models/student.model');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Student route works');
});

router.post('/add', async (req, res, next) => {

    const newStudent = await Student.create({
        studentId: req.body.studentId,
        studentFirstName: req.body.studentFirstName,
        studentLastName: req.body.studentLastName
    })

    res.send({student: newStudent});
});




module.exports = router;