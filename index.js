const express = require("express");
// Import Mongoose to connect to the database
const db = require("./config/mongoose");
const port = 8000;
const app = express();

// Middleware for parsing form data
app.use(express.urlencoded());
// Serve static files from the 'assets' directory
app.use(express.static("assets"));
// Use express-ejs-layouts for layout support
const expressLayouts = require("express-ejs-layouts");
app.use(expressLayouts);

// Extract styles and scripts from sub pages into the layout
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);

// Set up the view engine as EJS
app.set("view engine", "ejs");
app.set("views", "./views");

// Use the express router defined in the 'routes' directory
app.use("/", require("./routes"));

// Start the server
app.listen(port, (err) => {
  if (err) {
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is running on the port: ${port}`);
});
