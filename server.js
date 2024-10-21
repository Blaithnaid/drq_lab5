const express = require("express");
const path = require("path");
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

app.get("/index", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/hello/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

app.get("/hello/:name/:sname", (req, res) => {
  const name = req.params.name;
  const sname = req.params.sname;
  res.send(`Hello ${name} ${sname}`);
});

app.get("/api/movies", (req, res) => {
  const movies = [
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster: "https://example.com/poster1.jpg",
    },
    {
      Title: "Captain America: Civil War",
      Year: "2016",
      imdbID: "tt3498820",
      Type: "movie",
      Poster: "https://example.com/poster2.jpg",
    },
    {
      Title: "World War Z",
      Year: "2013",
      imdbID: "tt0816711",
      Type: "movie",
      Poster: "https://example.com/poster3.jpg",
    },
  ];
  res.status(201).json({ movies });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
