const mongoose = require('mongoose');

studentSchema = mongoose.Schema({
    studentId: Number,
    studentFirstName: String,
    studentLastName: String
})

Student = mongoose.model('Student', studentSchema);

module.exports = Student;