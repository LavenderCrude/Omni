import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 3000;

const __dirname = dirname(fileURLToPath(import.meta.url));

// Serve static files from the 'public' directory
app.use(express.static(join(__dirname, "public")));

// Set EJS as the view engine
app.set("view engine", "ejs");

// Set the views directory
app.set("views", join(__dirname, "views"));

// Routes to serve the HTML files
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/search", (req, res) => {
  res.render("search");
});
app.get("/notification", (req, res) => {
  res.render("notification");
});
app.get("/accounts", (req, res) => {
  res.render("accounts");
});
app.get("/settings", (req, res) => {
  res.render("settings");
});
app.get("/declined", (req, res) => {
  res.render("declined");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
