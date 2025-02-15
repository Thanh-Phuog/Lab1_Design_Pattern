const express = require('express');
const router = express.Router();
const studentController = require('../../controller/student_controller');

router.post('/students', studentController.createStudent);
router.get('/students', studentController.getStudents); 
router.get('/students/:id', studentController.getStudent);
router.put('/students/:id', studentController.updateStudent);
router.delete('/students/:id', studentController.deleteStudent);
router.delete('/students', studentController.deleteAllStudents);

module.exports = router;