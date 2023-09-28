// Require Express
const express = require("express");

// Express server handling requests and responses
const app = express();

app.use(express.static("public"));

//  first Route:
app.get("/home", (request, response) => {
  response.sendFile(__dirname + "./views/home.html");
});
app.get("/about", (request, response) =>
  response.sendFile(__dirname + "./views/about.html")
);
app.get("/work", (request, response) =>
  response.sendFile(__dirname + "./views/work.html")
);
// Server Started
app.listen(3000, () => console.log("My first app listening on port 3000! "));
