var express = require("express")
var bodyParser = require("body-parser")
var path = require("path")
var mysql = require("mysql")
var fs = require("fs")

var app = express();
var PORT = 3000;
var PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log("Server up on : " + PORT);
  console.log("Congrats.")
});

