const express = require("express");
const path = require("path");
const app = express();

// A test route to make sure the server is up.
app.get("/api/ping", (request, response) => {
  console.log("❇️ Received GET request to /api/ping");
  response.send("pong!");
});

// A mock route to return some data.
app.get("/api/movies", (request, response) => {
  console.log("❇️ Received GET request to /api/movies");
  response.json({
    data: [
      { id: 1, name: "1" },
      { id: 2, name: "2" },
    ],
  });
});

app.get("/server/movies_metadata.json", (request, response) => {
  const movieData = require("./movies_metadata.json");
  response.json(movieData);
});

app.get("/server/movies_metadata.json/:id", (request, response) => {
  const movieData = require("./movies_metadata.json");
  const movieId = Number(request.params.id);
  const movie = movieData.find((m) => m.id.toString() === movieId);

  if (movie) {
    response.json(movie);
  } else {
    response.status(404).json({ message: "Movie not found" });
  }
});

// Express port-switching logic
let port;
console.log("❇️ NODE_ENV is", process.env.NODE_ENV);
if (process.env.NODE_ENV === "production") {
  port = process.env.PORT || 3000;
  app.use(express.static(path.join(__dirname, "../build")));
  app.get("*", (request, response) => {
    response.sendFile(path.join(__dirname, "../build", "index.html"));
  });
} else {
  port = 3001;
  console.log("⚠️ Not seeing your changes as you develop?");
  console.log(
    "⚠️ Do you need to set 'start': 'npm run development' in package.json?"
  );
}

// Start the listener!
const listener = app.listen(port, () => {
  console.log("❇️ Express server is running on port", listener.address().port);
});
