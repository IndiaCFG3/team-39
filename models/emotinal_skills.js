var mongoose = require("mongoose");

var SociallSkillsSchema = new mongoose.Schema({
   StudentName:String,
   StudentRollNo:String,
   SocialSkill1:Number,
   SocialSkill2:Number,
   SocialSkill3:Number,
   SocialSkill4:Number,
   SocialSkill5:Number,
   Comments:[
       
        {
			type: mongoose.Schema.Types.ObjectId,
			ref: "comment"
		}
   ]

});
module.exports = mongoose.model("EmotionalSkills", SocialSkillsSchema);