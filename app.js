var express    = require('express')
var mongoose   = require('mongoose')
var Comment    =require('/models/comment')
var app        = express();
app.use(express.static("public"));

mongoose.set("useUnifiedTopology",true);
mongoose.set('useFindAndModify', false);

Comment.insert({"Skill:"emotional","text":""})
app.listen(3000,function(){
    console.log("server has started")
  });