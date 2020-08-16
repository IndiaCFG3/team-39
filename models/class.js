var mongoose = require("mongoose");

var ClassSchema = mongoose.Schema({
    ClassName: String,
    TeacherName:String,
    Student:[
        
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "student"
            }
    ]
});
module.exports = mongoose.model("Class", ClassSchema);