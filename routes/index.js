// Import the Express library
const express = require("express");

// Create an Express router
const router = express.Router();

// Import the home controller
const homeController = require("../controllers/home_controller");

// Log a message to indicate that the router has been loaded successfully
console.log("--> Router Loaded Successfully <--");

// Route for the home page
router.get("/", homeController.home);

// Route for project requests
router.use("/project", require("./project"));

// Export the router to make it available for use in other parts of the application
module.exports = router;
