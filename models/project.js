// Import the Mongoose library
const mongoose = require("mongoose");

// Define the schema for a Project
const projectSchema = new mongoose.Schema(
  {
    // Name of the project
    name: {
      type: String,
      trim: true,
      required: true,
    },

    // Description of the project
    description: {
      type: String,
      required: true,
    },

    // Author of the project
    author: {
      type: String,
      required: true,
    },

    // Array of issues associated with the project, using ObjectId references to the 'Issue' model
    issues: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Issue",
      },
    ],

    // Array of labels associated with the project
    labels: [
      {
        type: String,
      },
    ],
  },
  // Additional options for the schema
  {
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields
  }
);

// Create a Mongoose model named 'Project' based on the defined schema
const Project = mongoose.model("Project", projectSchema);

// Export the Project model to make it available for use in other parts of the application
module.exports = Project;
