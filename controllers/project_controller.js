// Import the 'Project' and 'Issue' models from the specified paths
const Project = require("../models/project");
const Issue = require("../models/issue");
const { findById } = require("../models/project"); // (Note: This import doesn't seem to be used)

// Controller function for creating a new project
module.exports.create = async function (req, res) {
  try {
    // Create a new project with data from the request body
    await Project.create({
      name: req.body.name,
      description: req.body.description,
      author: req.body.author,
    });

    // Redirect back to the previous page
    return res.redirect("back");
  } catch (err) {
    // Log any errors and redirect back to the previous page in case of an error
    console.log(err);
    return res.redirect("back");
  }
};

// Controller function for displaying a project and its issues
module.exports.project = async function (req, res) {
  try {
    // Find the project by ID and populate its 'issues' field
    let project = await Project.findById(req.params.id).populate({
      path: "issues",
    });

    // If the project is found, render the 'project_page' view with the project data
    if (project) {
      return res.render("project_page", {
        title: "Project Page",
        project,
      });
    }

    // If the project is not found, redirect back to the previous page
    return res.redirect("back");
  } catch (err) {
    // Log any errors and redirect back to the previous page in case of an error
    console.log(err);
    return res.redirect("back");
  }
};

// Controller function for creating a new issue in a project
module.exports.createIssue = async function (req, res) {
  try {
    // Find the project by ID
    let project = await Project.findById(req.params.id);

    // If the project is found, create a new issue with data from the request body
    if (project) {
      let issue = await Issue.create({
        title: req.body.title,
        description: req.body.description,
        labels: req.body.labels,
        author: req.body.author,
      });

      // Update the project's 'issues' and 'labels' fields with the new issue data
      project.issues.push(issue);
      if (!(typeof req.body.labels === "string")) {
        for (let label of req.body.labels) {
          let isPresent = project.labels.find((obj) => obj == label);
          if (!isPresent) {
            project.labels.push(label);
          }
        }
      } else {
        let isPresent = project.labels.find((obj) => obj == req.body.labels);
        if (!isPresent) {
          project.labels.push(req.body.labels);
        }
      }

      // Save the updated project and redirect back to the previous page
      await project.save();
      return res.redirect("back");
    } else {
      // If the project is not found, redirect back to the previous page
      return res.redirect("back");
    }
  } catch (err) {
    // Log any errors and redirect back to the previous page in case of an error
    console.log(err);
    return res.redirect("back");
  }
};
