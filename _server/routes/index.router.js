const express = require('express');
const router = express.Router();

const jwtHelper = require('../config/jwtHelper');
const ctrlUser = require('../controllers/user.controller');
const ctrlStudent = require('../controllers/student.controller');

router.post('/register', ctrlUser.register);
router.post('/login', ctrlUser.authenticate);
router.get('/logout', jwtHelper.verifyJwtToken, ctrlUser.logout);
router.get('/user-details', jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.get('/get-students', jwtHelper.verifyJwtToken, ctrlStudent.get_students);
router.post('/add-student',  jwtHelper.verifyJwtToken, ctrlStudent.add_student);
router.post('/update-student',  jwtHelper.verifyJwtToken, ctrlStudent.update_student);

module.exports = router;
