var mongoose = require("mongoose");

var AdminSchema = mongoose.Schema({
    Name:String,
    Password:String,
    Teacher:[
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "teacher"
		}
    ],
    Class:[
        {
            type: mongoose.Schema.Types.ObjectId,
			ref: "class"
        }
    ]
    
    
});
module.exports = mongoose.model("Admin", adminSchema);