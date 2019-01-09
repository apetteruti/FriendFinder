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

//variables for the potential nerds
var nerds = [
    {
        routeName = "velma",
        name = "Velma",
        nerdPoints = 25
    },
    {
        routeName = "shaggy",
        name = "Shaggy",
        nerdPoints = 20
    },
    {
        routeName = "scooby",
        name = "Scooby",
        nerdPoints = 15
    },
    {
        routeName = "daphne",
        name = "Daphne",
        nerdPoints = 10
    },
    {
        routeName = "fred",
        name = "Fred",
        nerdPoints = 5
    }
]

//ROUTES
//Basic route that directs to home page


//Route that directs to the suggested friend page



//Compare the newFriend data from javascript to the objects
// Create New Nerds - takes in JSON input
app.post("/api/home", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newfriend = req.body;
  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newfriend.routeName = newfriend.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newfriend);
  
    characters.push(newfriend);
  
    res.json(newfriend);
  });
  
  // Starts the server to begin listening
  // =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  
//compare newFriend data to the properties in the objects above
//if newFriend points are less than 7, then return fred
if (newFriend < 8){
    //return fred
}

else if (newFriend > 6 && newFriend < 13){
    //return daphne
}

else if (newFriend > 12 && newFriend < 17){
    //return scooby
}

else if (newFriend > 16 && newFriend < 23){
    //return shaggy
}

else if (newFriend > 22){
    //return velma
}

//Displays the object property information - this probably needs to go inside the other posting lines
app.get("/api/home/:nerds", function(req, res) {
    var nerdFriend = req.params.nerd;
  
    console.log(nerdFriend);
  
    for (var i = 0; i < nerds.length; i++) {
      if (nerdFriend === nerds[i].nerdPoints) {
        return res.json(characters[i]);
      }
    }
  
    return res.json(false);
  });