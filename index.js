var express = require("express");
var app     = express();
var path    = require("path");


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/about',function(req,res){
  res.sendFile(path.join(__dirname+'/public/about.html'));
});

app.get('/contact',function(req,res){
  res.sendFile(path.join(__dirname+'/public/contact.html'));
});

app.listen(process.env.PORT || 3000);
console.log('working on 3000');