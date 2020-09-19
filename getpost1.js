var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    // console.log(req.url);
     res.sendFile(__dirname + '/index.html');
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
   var User = req.body['username'];
   var Pass = req.body['pass'];
   console.log(User);
   console.log(Pass);
   });
 // });



app.listen(8082, '127.0.0.1');
