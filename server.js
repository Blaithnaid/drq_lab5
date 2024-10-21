const express = require("express");
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/", (req, res) => {
  res.send("Welcome to Data Representation & Querying");
});

app.get("/hello/:name/:sname", (req, res) => {
  res.send(req.params.name);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
