var mongoose = require("mongoose");

var TeacherSchema = mongoose.Schema({
    Name: String,
    Password:String,
    Class:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "class"
    }

});
module.exports = mongoose.model("Teacher", TeacherSchema);