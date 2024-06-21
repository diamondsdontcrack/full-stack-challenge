const express = require("express");
const app = express();
const port = 3001; // Port on which the server will run

// Middleware to parse JSON bodies
app.use(express.json());

// Hardcoded list of issues with the 3 attributes
let issues = [
  { id: 1, title: "Issue 1", description: "Description of issue 1" },
  { id: 2, title: "Issue 2", description: "Description of issue 2" },
  { id: 3, title: "Issue 3", description: "Description of issue 3" },
];

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`); // Log the server start
});
