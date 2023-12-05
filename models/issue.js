// Import the Mongoose library
const mongoose = require("mongoose");

// Define the schema for an Issue
const issueSchema = new mongoose.Schema(
  {
    // Title of the issue
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Description of the issue
    description: {
      type: String,
      required: true,
      trim: true,
    },

    // Author of the issue
    author: {
      type: String,
      required: true,
      trim: true,
    },

    // Array of labels associated with the issue
    labels: [
      {
        type: String,
        trim: true,
        required: true,
      },
    ],
  },

  // Additional options for the schema
  {
    timestamps: true, // Automatically add 'createdAt' and 'updatedAt' fields
  }
);

// Create a Mongoose model named 'Issue' based on the defined schema
const Issue = mongoose.model("Issue", issueSchema);

// Export the Issue model to make it available for use in other parts of the application
module.exports = Issue;
