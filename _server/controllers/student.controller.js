const mongoose = require('mongoose');
const responseHelper = require('../helpers/response.helper');
const Student = mongoose.model('Student');

module.exports.get_students = async (req, res, next) => {
    try {
        const students = await Student.find();
        responseHelper.successResponse(res, null, 'Student details fetched successfully', students);
    } catch (error) {
        responseHelper.errorResponse(res, null, 'Error found.', error);
    }
};

module.exports.add_student = async (req, res, next) => {
    try {
        const {
            name,
            rollNo,
            teacherId,
            comments,
            emotionalSkill1,
            emotionalSkill2,
            emotionalSkill3,
            emotionalSkill4,
            emotionalSkill5,
            socialSkill1,
            socialSkill2,
            socialSkill3,
            socialSkill4,
            socialSkill5,
        } = req.body;

        let student = new Student();
        student.name = name; 
        student.rollNo = rollNo; 
        student.teacherId = teacherId; 
        student.comments = comments; 
        student.emotionalSkill1 = emotionalSkill1; 
        student.emotionalSkill2 = emotionalSkill2; 
        student.emotionalSkill3 = emotionalSkill3; 
        student.emotionalSkill4 = emotionalSkill4; 
        student.emotionalSkill5 = emotionalSkill5; 
        student.socialSkill1 = socialSkill1; 
        student.socialSkill2 = socialSkill2; 
        student.socialSkill3 = socialSkill3; 
        student.socialSkill4 = socialSkill4; 
        student.socialSkill5 = socialSkill5; 
        const data = await student.save();
        responseHelper.successResponse(res, null, 'Student added successfully', data);
    } catch (error) {
        responseHelper.errorResponse(res, null, 'Error found.', error);
    }
};


module.exports.update_student = async (req, res, next) => {
    try {
        const data = await Student.findByIdAndUpdate(req.body.id, req.body);
        responseHelper.successResponse(res, null, 'Student updated successfully', data);
    } catch (error) {
        responseHelper.errorResponse(res, null, 'Error found.', error);
    }
};
