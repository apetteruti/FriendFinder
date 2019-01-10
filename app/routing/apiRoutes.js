var path = require ("path");

var friends = require("../data/friends.js")

// * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
module.exports = function(app){
    app.get("/api/friends", function (req, res) {
    return res.json(friends);
});

        
        // Create New Characters - takes in JSON input
        app.post("/api/friends", function (req, res) {
            // req.body hosts is equal to the JSON post sent from the user
            // This works because of our body parsing middleware
            var newNerd = req.body;
            
            newNerd.routeName = newNerd.name.replace(/\s+/g, "").toLowerCase();
            
            console.log(newNerd);
            
            nerds.push(newNerd);
            
            res.json(newNerd);

                for (var i = 0; i < nerds.length; i++) {
                    if (nerdFriend === nerds[i].nerdPoints) {
                        return res.json(characters[i]);
                    }
                }
                        //compare newFriend data to the properties in the objects above
                        //if newFriend points are less than 7, then return fred
        
                        var matchFriend = function () {
                            if (newNerd < 13 && friends[i] == 10) {
                                return res.json (friends[i].name)
                            } else if (newFriend > 12 && newFriend < 23) {
                                //return daphne
                            } else if (newFriend > 22 && newFriend < 33) {
                                //return scooby
                            } else if (newFriend > 32 && newFriend < 43) {
                                //return shaggy
                            } else if (newFriend > 42) {
                                //return velma
                            }
                        }
                        matchFriend();
            });

        }; 
