// Dependencies
var express = require("express");

// Configuring Express Server
var app = express();

// Initial Port Setup
var PORT = process.env.PORT || 8080;

// Enabling data parsing on our Express app
app.use(express.urlencoded({ extended: true }));

// For future site enhancement which will incoporate API
app.use(express.json);

require("./routes/html-routes")(app);

// Start server
app.listen(PORT, function() {
    console.log("App is listening on PORT: " + PORT);
});