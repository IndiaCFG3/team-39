var mongoose = require("mongoose");

var CommentSchema = mongoose.Schema({
    Skill:String,
    Text: String,
    RollNo:String,
    Name:String,
});
module.exports = mongoose.model("Comment", CommentSchema);