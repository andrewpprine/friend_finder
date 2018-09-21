var express = require("express");
var app = express(); //because cannot use until invoked

var bodyParser = require("body-parser");
var path = require("path");

var port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


app.use(express.static("public"));

app.get('/',function(req,res){
   res.send('<h1>Hello world!<h1>')
});


// app.get('/home', function(req,res){
//    res.send('/home');
// });





app.listen(port,function(){
   console.log('listening on port:' + port);
});








var stack = {
   FrontEnd: 'HTML + CSS',
   BackEnd: 'node + Express + SQL',
   Bootstrap: true,
   Languages: 5
};

app.get('/api/stack',function(req,res){
   res.json(stack);
});