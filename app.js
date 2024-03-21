var express = require('express');

var path = require('path');

var fs = require('fs');

var app= express();

var morgan = require('morgan');


app.use(morgan("short"))

// logger middleware
// app.use(function(req,res, next){
//   console.log("Request Ip" + req.url);
//   console.log("Request Date"+ new Date());
//   next();
// });

// file path middle ware

var staticPath = path.join(__dirname, "static");
app.use(express.static(staticPath));



app.use(function(err, req, res, next){
  console.log(err);
  next(err);
})

// app.use(function(req,res,next){
//   var filePath = path.join(__dirname, "static", req.url)
//   fs.stat(filePath, function(err, fileInfo){
//     if(err){
//       next()
//       return;

//     }
//     if (fileInfo.isFile()){
//       res.sendFile(filePath)
//     } else {
//       next();
//     }
//   });
// });


// 404 handler middleware

app.use(function(req, res){
  res.status(404);
  res.send("file is not found !!!");
});

app.listen('3000', function(){
  console.log("app started on port 3000");
});




