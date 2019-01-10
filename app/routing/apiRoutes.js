// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
app.get("/api/nerds", function(req, res) {
    return res.json(nerds);
  });

// * A POST routes `/api/friends`. This will be used to handle incoming survey results. 
//This route will also be used to handle the compatibility logic.

// Create New Characters - takes in JSON input
app.post("/api/nerds", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newNerd = req.body;

    newNerd.routeName = newNerd.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newNerd);
  
    nerds.push(newNerd);
  
    res.json(newNerd);
  });

  var nerdMatch = function(event){

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

// var nerdFriend = req.params.nerd;
  
// console.log(nerdFriend);

// for (var i = 0; i < nerds.length; i++) {
//   if (nerdFriend === nerds[i].nerdPoints) {
//     return res.json(characters[i]);
//   }
// }

// return res.json(false);
  }