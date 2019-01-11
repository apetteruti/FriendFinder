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

        console.log(newNerd.nerdScore);

        //post the matched friends
        var matchName = "";
        var matchPhoto = "";

        //creates proxy variables for the user nerdScore

        if (newNerd.nerdScore < 13) {
            var newNerdScore10 = 10;
        } else if (newNerd.nerdScore > 12 && newNerd.nerdScore < 23) {
            var newNerdScore20 = 20;
        } else if (newNerd.nerdScore > 22 && newNerd.nerdScore < 33) {
            var newNerdScore30 = 30;
        } else if (newNerd.nerdScore > 32 && newNerd.nerdScore < 43) {
            var newNerdScore40 = 40;
        } else {
            var newNerdScore50 = 50;
        }

        for (var i = 0; i < friends.length; i++) {
            // console.log('friend = ' + JSON.stringify(friends[i].nerdScore))
            // compare newFriend data to the properties in the objects above

            if (friends[i].nerdScore == newNerdScore10) {
                // var fred = function() {
                // var fred = JSON.stringify(friends[i].name);
                matchName = friends[i].name;
                console.log(matchName);
                matchPhoto = friends[i].photo
                console.log(matchPhoto);
                // console.log(fred);  
                // }

            } else if (friends[i].nerdScore == newNerdScore20) {
                // console.log(daphne);
                // var daphne = JSON.stringify(friends[i].name);
                matchName = friends[i].name;
                console.log(matchName);
                matchPhoto = friends[i].photo
                console.log(matchPhoto);


            } else if (friends[i].nerdScore == newNerdScore30) {
                // var scooby = JSON.stringify(friends[i].name);
                // console.log(scooby);
                matchName = friends[i].name;
                console.log(matchName);
                matchPhoto = friends[i].photo
                console.log(matchPhoto);

            } else if (friends[i].nerdScore == newNerdScore40) {
                // var shaggy = JSON.stringify(friends[i].name)
                // console.log(shaggy);
                matchName = friends[i].name;
                console.log(matchName);
                matchPhoto = friends[i].photo
                console.log(matchPhoto);

            } else if (friends[i].nerdScore == newNerdScore50) {
                // var velma = JSON.stringify(friends[i].name)
                // console.log(velma);
                matchName = friends[i].name;
                console.log(matchName);
                matchPhoto = friends[i].photo
                console.log(matchPhoto);
            }

        }

        newNerd.matchName = matchName;
        newNerd.matchPhoto = matchPhoto;
        console.log(newNerd);

        //attempting to get matchName out of the apiRoute
        // res.json(matchName);
        // res.json(matchPhoto);
        res.json({newNerd: newNerd});

    });
}