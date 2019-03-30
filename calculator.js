const express = require("express");
const bodyParser = require("body-parser");
const app = express();
//urlencoded is the bodyParser we want to use when posting data to server from html form
app.use(bodyParser.urlencoded({ extended: true }));

//home route
//__dirname is a constant that allows us to grab the path of the file location
//so it doesn't matter if were on a local comp or using a server
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("The result of the calculation is " + result);
});

// bmi route
app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var bmiResult = weight / Math.pow(height, 2);
  bmiResult = Math.floor(bmiResult);

  res.send("This is your current BMI result " + bmiResult);
});

//spin up server
app.listen(3030, function() {
  console.log("I am listening");
});
