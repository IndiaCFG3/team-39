var express          = require('express')
var mongoose         = require('mongoose')
var Comment          = require('/models/comment')
var Admin            = require('/models/admin')
var Class            = require('/models/class')
var emotinal_skills  = require('/models/emotional_skills')
var Social_skills    = require('/models/social_skills')
var Students         = require('/models/students')
var Teachers         = require('/models/teachers')
var app              = express();
app.use(express.static("public"));

mongoose.set("useUnifiedTopology",true);
mongoose.set('useFindAndModify', false);
app.listen(3000,function(){
    console.log("server has started")
  });