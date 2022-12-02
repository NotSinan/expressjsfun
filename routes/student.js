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


router.get('/list', (req, res, next) => {

    Student.find((err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.send({status: 200, students: response})
        }
    })

});

router.get('/searchByFirstName', (req, res, next) => {

    const firstName = req.query.studentFirstName;

    Student.find({studentFirstName: firstName}, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.send({status: 200, students: response})
        }
    });

});

router.get('/searchById', (req, res, next) => {

    const idQuery = req.query.id;

    Student.findById(idQuery, (err, response) => {
        if (err) {
            res.send(err)
        } else {
            res.send({status: 200, students: response})
        }
    });

});




module.exports = router;