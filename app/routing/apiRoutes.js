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

    app.get("/api/friends", function (req, res) {
        var match = req.params.friends;
        console.log(match);
        for (var i = 0; i < friends.length; i++) {
            if (chosen === friends[i].routeName) {
                return res.json(friends[i]);
            }
        }

        return res.json(false);

    })

    // Create New Characters - takes in JSON input
    app.post("/api/friends", function (req, res) {

        //adds the routename to the newNerd object
        var newNerd = req.body;

        newNerd.routeName = newNerd.name.replace(/\s+/g, "").toLowerCase();

        console.log(newNerd);

        friends.push(newNerd);

        res.json(newNerd);

        console.log(newNerd.nerdScore);

        //post the matched friends
        var matchName = "";
        var matchPhoto = "";

        for (var i = 0; i < friends.length; i++) {
            // console.log('friend = ' + JSON.stringify(friends[i].nerdScore))
            // compare newFriend data to the properties in the objects above

            if (friends[i].nerdScore == 10) {
                // var fred = function() {
                    // var fred = JSON.stringify(friends[i].name);
                    matchName = friends[i].name;
                    console.log (matchName);
                    matchPhoto = friends[i].photo
                    console.log (matchPhoto);
                    // console.log(fred);  
                // }

            } else if (friends[i].nerdScore == 20) {
                // console.log(daphne);
                function daphne() {
                    // var daphne = JSON.stringify(friends[i].name);
                    matchName = JSON.stringify(friends[i].name)
                    matchPhoto = (friends[i].photo)

                }

            } else if (friends[i].nerdScore == 30) {
                // var scooby = JSON.stringify(friends[i].name);
                // console.log(scooby);
                function scooby() {
                    matchName = JSON.stringify(friends[i].name)
                    matchPhoto = (friends[i].photo)
                }

            } else if (friends[i].nerdScore == 40) {
                // var shaggy = JSON.stringify(friends[i].name)
                // console.log(shaggy);
                function shaggy() {
                    matchName = JSON.stringify(friends[i].name)
                    matchPhoto = (friends[i].photo)
                }

            } else if (friends[i].nerdScore == 50) {
                // var velma = JSON.stringify(friends[i].name)
                // console.log(velma);
                function velma() {
                    matchName = JSON.stringify(friends[i].name)
                    matchPhoto = (friends[i].photo)
                }
            }

            function matchFriend() {

                if (newNerd.nerdScore < 13) {
                    // console.log(fred);
                    // fred();

                } else if (newNerd.nerdScore > 12 && newNerd.nerdScore < 23) {
                    // console.log(daphne);
                    daphne();

                } else if (newNerd.nerdScore > 22 && newNerd.nerdScore < 33) {
                    // console.log(scooby);
                    scooby();

                } else if (newNerd.nerdScore > 32 && newNerd.nerdScore < 43) {
                    // console.log(shaggy);
                    shaggy();

                } else {
                    // console.log(velma);
                    velma();
                }
            }

        };

        //runs the matchFriend function to compare the nerdScore list to the user input
        matchFriend();
        //attempting to get matchName out of the apiRoute
        res.json(matchName);
        res.json(matchPhoto);

    });
}