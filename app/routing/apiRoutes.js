
//Path dependency
var path = require("path");

//Links to the friends list
var friends = require("../data/friends.js")

// Module-exports connects the files to allow for get and post
module.exports = function (app) {

    //get request to friends
    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });
    console.log(friends);


    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {
        
        
        var matchName = "";
        var matchPhoto = "";
        
        //compare newFriend data to the properties in the objects above
        //if newFriend points are less than 7, then return fred
        // for (var i = 0; i < friends.length; i++) {
            // if (newNerd.nerdScore < 13 && friends[i].nerdScore == 10) {
                // return res.json(friends[i].name)
                
            // } else if (newNerd.nerdScore > 12 && newFriend < 23 && friends[i].nerdScore == 20) {
                // return res.json(friends[i].name)
                // matchName = friends[i].name;
                // matchPhoto = friends[i].photo;
            // } else if (newNerd.nerdScore > 22 && newFriend < 33  && friends[i].nerdScore == 30) {
                return res.json(friends[i].name)
                // matchName = friends[i].name;
                // matchPhoto = friends[i].photo;
            // } else if (newNerd.nerdScore > 32 && newFriend < 43  && friends[i].nerdScore == 40) {
                return res.json(friends[i].name)
                // matchName = friends[i].name;
                // matchPhoto = friends[i].photo;
            // } else if (newNerd.nerdScore > 42  && friends[i].nerdScore == 50) {
                // return res.json(friends[i].name)
                // matchName = friends[i].name;
                // matchPhoto = friends[i].photo;
            }          
        }
        // req.body hosts is equal to the JSON post sent from the user
        // This works because of our body parsing middleware
        var newNerd = req.body;
        
        newNerd.routeName = newNerd.name.replace(/\s+/g, "").toLowerCase();
        
        console.log(newNerd);
        
        friends.push(newNerd);
        
        res.json(newNerd);
 
        res.json ({matchName: matchName, matchPhoto: matchPhoto});
       
    });

};