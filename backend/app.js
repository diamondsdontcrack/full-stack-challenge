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

// Create
app.post("/api/issues", (req, res) => {
  const issue = req.body;

  // Add the new issue to the issues list
  issues.push(issue);

  // Log the created issue
  console.log("Issue created:", issue);

  // Send a response with status 201 (successfully created standard response code)
  res.status(201).send(issue);
});

// Read
app.get("/api/issues", (req, res) => {
  // Send list of issues as JSON
  res.json(issues);
});

// Update
app.put("/api/issues/:id", (req, res) => {
  // Get issue ID from URL parameter
  const id = parseInt(req.params.id);

  const updatedIssue = req.body;

  // Update the issue in the list
  issues = issues.map((issue) => (issue.id === id ? updatedIssue : issue));

  // Log the updated issue
  console.log("Issue updated:", updatedIssue);

  // Send the updated issue as the response
  res.send(updatedIssue);
});

// Delete
app.delete("/api/issues/:id", (req, res) => {
  // Get issue ID from the URL parameter
  const id = parseInt(req.params.id);

  // Remove issue from list
  issues = issues.filter((issue) => issue.id !== id);

  // Log the deletion
  console.log("Issue deleted with id:", id);

  // Send a response with status 204 (No Content returned)
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  // Log the server start
  console.log(`Server is running on http://localhost:${port}`);
});
