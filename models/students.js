var mongoose = require("mongoose");

var StudentSchema = mongoose.Schema({
    Name: String,
	RollNo:String,
	Class: String,
});
module.exports = mongoose.model("Students", StudentSchema);