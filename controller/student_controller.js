const mongoose = require('mongoose');
const Student = require('../model/student_model');

class StudentController {
    async createStudent(req, res) {
        try {
            const student = new Student(req.body);
            await student.save();
            res.status(201).send(student);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async getStudents(req, res) {
        try {
            const students = await Student.find();
            res.status(200).send(students);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async getStudent(req, res) {
        try {
            const student = await Student.findById(req.params.id);
            if (!student) {
                return res.status(404).send('Student not found');
            }
            res.status(200).send(student);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async updateStudent(req, res) {
        try {
            const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!student) {
                return res.status(404).send('Student not found');
            }
            res.status(200).send(student);
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async deleteStudent(req, res) {
        try {
            const student = await Student.findByIdAndDelete(req.params.id);
            if (!student) {
                return res.status(404).send('Student not found');
            }
            res.status(200).send('Deleted student successfully');
        } catch (error) {
            res.status(400).send(error);
        }
    }
    async deleteAllStudents(req, res) {
        try {
            const students = await Student.deleteMany();
            res.status(200).send(students);
        } catch (error) {
            res.status(400).send(error);
        }
    }
}
module.exports = new StudentController();

