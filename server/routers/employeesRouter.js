const express = require('express');
const employeesBLL = require('../BLL/employeesBLL');

const router = express.Router();

// Entry Point 'http://localhost:8000/employees'

// Get All Employees (with filter)
router.route('/').get(async (req, res) => {
    try {
        const filters = req.query;
        console.log(filters);
        const employees = await employeesBLL.getAllEmployees(filters);
        res.json(employees);
    } catch (error) {
        res.status(500).json(error); // 500 - Internal Server Error
    }
});

// Get Employee By ID
router.route('/:id').get(async (req, res) => {
    try {
        const { id } = req.params;
        const employee = await employeesBLL.getEmployeeById(id);
        res.json(employee);
    } catch (error) {
        res.status(500).json(error.name);
    }
});

// Add a Employee
router.route('/').post(async (req, res) => {
    try {
        const obj = req.body;
        const result = await employeesBLL.addEmployee(obj);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Update a Employee
router.route('/:id').put(async (req, res) => {
    try {
        const { id } = req.params;
        const obj = req.body;
        const result = await employeesBLL.updateEmployee(id, obj);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

// Delete a Employee
router.route('/:id').delete(async (req, res) => {
    try {
        const { id } = req.params;
        const result = await employeesBLL.deleteEmployee(id);
        res.json(result);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
