const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// this function is used to serve static files
app.use(express.static("public"));

// this function is used to parse the body of the request
app.use(bodyParser.urlencoded({ extended: true }));

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
  // if our route is /index, show index.html
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/name", (req, res) => {
  // this displays in the browser via a POST request
  const firstname = req.query.firstname;
  const lastname = req.query.lastname;
  res.send(`Hello ${firstname} ${lastname}`);
});

app.get("/hello/:name", (req, res) => {
  // :name is a parameter. we display it with 'Hello" when it's passed into /hello/(name).
  const name = req.params.name;
  res.send(`Hello ${name}`);
});

app.get("/hello/:name/:sname", (req, res) => {
  // same as above but with two parameters
  const name = req.params.name;
  const sname = req.params.sname;
  res.send(`Hello ${name} ${sname}`);
});

app.get("/api/movies", (req, res) => {
  // this is a mock api, returning the movies array from last week
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
