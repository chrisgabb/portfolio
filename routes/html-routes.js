// Dependencies
var path = require("path");

// Routing

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
    
      app.get("/resume", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/resume.html"));
      });

      app.get("/contact", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/contact.html"));
      });
    
      // If no matching route is found default to index.html
      app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
      });
}