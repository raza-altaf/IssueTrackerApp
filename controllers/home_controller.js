// Import the 'Project' model from the specified path
const Project = require("../models/project");

// Controller function for rendering the home page
module.exports.home = async function (req, res) {
  try {
    // Fetch all projects from the database, sorted by createdAt in descending order
    let projects = await Project.find({}).sort("-createdAt");

    // Render the 'home' view and pass data to it
    return res.render("home", {
      title: "Issue/Bug Tracker | Home",
      projects,
    });
  } catch (err) {
    // Handle errors by logging them to the console
    console.log("Error", err);

    // Optionally, you might want to send an error response to the client
    return res.status(500).send("Internal Server Error");
  }
};
