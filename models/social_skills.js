var mongoose = require("mongoose");

var EmotionalSkillsSchema = new mongoose.Schema({
    RollNo:String,
    EmotionalSkill1:Number,
	EmotionalSkill2:Number,
	EmotionalSkill2:Number,
    EmotionalSkill3:Number,
    EmotionalSkill4:Number,
    Comments:[
       
        {
			type: mongoose.Schema.Types.ObjectId,
			ref: "comment"
		}
   ]
});
module.exports = mongoose.model("EmotionalSkills", EmotionalSkillsSchema);