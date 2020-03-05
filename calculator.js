//jshint expressversion:6
// everytime we install a package will be updadated on json and we need to require

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
//allows to post nested objects

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
// console.log(req.body.num1);   //the value of the calculator can  be stored here

  var num1 = Number(req.body.n1);
  var num2 = Number(req.body.n2);

  var result = num1 + num2;

  res.send("The Result will be" + result);
});

app.get("/bmicalculator", function(req, res){
res.sendFile(__dirname + "/bmicalculator");
});

app.post("/bmiCcalculator", function(req, res){
var weight = parseFloat(req.body.weight);
var weight = parseFloat(req.body.weight);

var bmi = weight / (height * height);

res.send("Your BMI is" + bmi);


});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
