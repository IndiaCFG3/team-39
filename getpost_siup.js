var express = require('express');
var app = express();
var bodyParser = require("body-parse");
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    // console.log(req.url);
     res.sendFile(__dirname + '/sign_up.html');
    // res.send("helo");
});

app.post('/', function(req,res){
    // console.log(req.body.username);
   //  var data= "";
   // req.on('data', function(chunk){
   //   data +=chunk;
   // });
   // req.on('end', function(chunk){
   //   console.log(data);
   var User = req.body;
   // var Pass = req.body;
   // var Passw = req.body
   console.log(User);
   // console.log(Pass);
   });
 // });



app.listen(8082, '127.0.0.1');
