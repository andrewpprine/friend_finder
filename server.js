var express = require("express");
var app = express(); //because cannot use until invoked
// var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");

var port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

app.use(express.static("app/public"));

app.get("/", function(req, res) {
  res.send("<h1>Hello world!<h1>");
});

// app.get('/home', function(req,res){
//    res.send('/home');
// });

// // initializes connection to sync with MySQL db
// var connection = mysql.createConnection({
//   host: process.env.DB_HOST,

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: process.env.DB_USER,

//   // Your password
//   password: process.env.DB_PASSWORD, //placeholder for your own mySQL password that you store in your own .env file
//   database: process.env.DB_NAME //TBD
// });

app.listen(port, function() {
  console.log("listening on port:" + port);
});

var stack = {
  FrontEnd: "HTML + CSS",
  BackEnd: "node + Express + SQL",
  Bootstrap: true,
  Languages: 5
};

app.get("/api/stack", function(req, res) {
  res.json(stack);
});
