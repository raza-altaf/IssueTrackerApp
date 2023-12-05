const mongoose = require("mongoose");

// Connect to MongoDB using the provided connection string
mongoose.connect(
  "mongodb+srv://4mohammedaltaf:knx2IpPPRHvlnCHE@issuetrackerapp.npjuuha.mongodb.net/?retryWrites=true&w=majority"
);

// Get the default connection
const db = mongoose.connection;

// Event listener for connection error
db.on("error", console.error.bind(console, "Error in connecting to MongoDB"));

// Event listener for successful connection
db.once("open", () => {
  console.log("--> Connected to Database :: MongoDB <--");
});

// Export the MongoDB connection
module.exports = db;
