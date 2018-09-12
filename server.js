var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


var app = express(); //because cannot use until invoked

var port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


app.use(express.static("public"));

app.get('/',function(req,res){
   res.send('<h1>Welcome to the home screen!<h1>')
});

app.get("/testing", function(req,res){
	res.send("Hello world!");
})

// app.get('/home', function(req,res){
//    res.render('public/home');
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