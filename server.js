const express = require("express");
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
  // if there is an error, this will catch it and send a 500 status code
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/", (req, res) => {
  // if our url route is blank, this will be displayed
  res.send("Welcome to Data Representation & Querying");
});

app.get("/hello/:name/:sname", (req, res) => {
  // if our url route is /hello/:name, this will be displayed
  res.send(req.params.name); // this will display the name that is inputted in the url
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
