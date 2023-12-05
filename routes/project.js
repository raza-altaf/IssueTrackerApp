// Import the Express library
const express = require("express");

// Create an Express router
const router = express.Router();

// Import the project controller
const projectController = require("../controllers/project_controller");

// Route to handle the creation of a new project
router.post("/create", projectController.create);

// Route to get information about a specific project
router.get("/:id", projectController.project);

// Route to create a new issue within a project
router.post("/:id", projectController.createIssue);

// Export the router to make it available for use in other parts of the application
module.exports = router;
