var http = require('http');
var fs=require("fs");
var querystring = require('querystring');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/school";

var server= http.createServer(function(req,res){
  // console.log(req.url)
  // console.log("jhjd")
    if (req.url === "/form"){
      console.log("hdvfgsd");
      res.writeHead(200, {"Content-Type": "text/html"});
      fs.createReadStream("./index.html", "utf-8").pipe(res);
      // res.send('jgdhsdg')

    }else {
      console.log("elseee");
    }
    // if(req.method === "GET"){
    //   // console.log("dbshfgdhs method");
    //   var q = url.parse(req.url, true).query;
    //   console.log(q);}else
    if(req.method === "POST"){
      var data= "";
     req.on('data', function(chunk){
       data +=chunk;
     });
     req.on('end', function(chunk){
       // console.log(data);
       // console.log(formdata);
       MongoClient.connect(url, function(err, db){
         if (err) throw err;
         var formdata=querystring.parse(data);
         db.collection['student'].insertOne(formdata, function(err,res){
           if (err) throw err;
           console.log('data inserted');
           db.close();
         })
       } )
     });
   }

    });
    server.listen(3000);
