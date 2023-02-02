const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        startWorkYear: Number,
        departmentID: Number,
    },
    { versionKey: false }
);

const Employee = mongoose.model('employees', employeeSchema);

module.exports = Employee;
