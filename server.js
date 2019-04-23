// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Array for friends
var friends = [

]

// Routes
// =============================================================
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "./public/home.html"));
  });

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "./public/survey.html"));
});

// API Route
// =============================================================
app.get("/api/friends", function(req, res) {
    return res.json(characters);
  });

// App listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
  