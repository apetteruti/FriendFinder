var path = require ("path");

module.exports = function(app){
// * A GET Route to `/survey` which should display the survey page.
// * A default, catch-all route that leads to `home.html` which displays the home page.
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

app.get("/survey.html", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

};