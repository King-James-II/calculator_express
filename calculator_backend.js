const express = require('express'); // Import Express library
const app = express(); // Create Express app
const port = 3000; // Port number

// Start the server
app.listen(port, () => {
  console.log(`App is running on port ${port}.`);
});

// Middleware to parse JSON bodies
app.use(express.json());

// Endpoint to handle addition
app.post('/add', (req, res) => {
  const { a, b } = req.body; // Extract request body
  const numA = parseFloat(a); // Convert to number
  const numB = parseFloat(b);
  res.status(200).json({ result: (numA + numB) }); // Send response
});

// Endpoint to handle subtraction
app.post('/subtract', (req, res) => {
  const { a, b } = req.body; // Extract request body
  const numA = parseFloat(a); // Convert to number
  const numB = parseFloat(b);
  res.status(200).json({ result: (numA - numB) }); // Send response
});

// Endpoint to handle multiplication
app.post('/multiply', (req, res) => {
  const { a, b } = req.body; // Extract request body
  const numA = parseFloat(a); // Convert to number
  const numB = parseFloat(b);
  res.status(200).json({ result: (numA * numB) }); // Send response
});

// Endpoint to handle division
app.post('/divide', (req, res) => {
  const { a, b } = req.body; // Extract request body
  const numA = parseFloat(a); // Convert to number
  const numB = parseFloat(b);
  // Check if divisor is zero
  if (numB == 0) {
    res.status(400).json({ error: "Unable to divide by zero." }); // Send error response
  } else {
    res.status(200).json({ result: (numA / numB) }); // Send response
  }
});
