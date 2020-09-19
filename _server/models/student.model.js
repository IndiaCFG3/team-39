const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamp');
const softDelete = require('mongoose-delete');

var studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Full name can\'t be empty'
  },
  rollNo: {
    type: Number,
    required: 'Roll number can\'t be empty',
    unique: true
  },
  teacherId: String,
  comments: String,
  emotionalSkill1: Number,
  emotionalSkill2: Number,
  emotionalSkill3: Number,
  emotionalSkill4: Number,
  emotionalSkill5: Number,
  socialSkill1: Number,
  socialSkill2: Number,
  socialSkill3: Number,
  socialSkill4: Number,
  socialSkill5: Number
});

studentSchema.plugin(timestamps);
studentSchema.plugin(softDelete, { overrideMethods: true });
mongoose.model('Student', studentSchema);