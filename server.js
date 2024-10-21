const express = require("express");
const app = express();
const port = 3000;

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
