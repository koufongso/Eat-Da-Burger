var express = require("express");

var PORT = process.env.PORT || 8080;

var app = express();

// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var router = require("./controllers/burgers_controller.js");

app.use(router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: " + PORT);
});
