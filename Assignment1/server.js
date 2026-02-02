const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
dotenv.config();

// Render provides the PORT via environment variable
const PORT = process.env.PORT || 3000;

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, "public")));

// Serve the HTML file
//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "public", "index.html"));
//});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "home.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "project.html"));
});
app.get("/", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});