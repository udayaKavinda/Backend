const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Simple GET route
app.get('/', (req, res) => {
  res.send('Hello World Back!');
});

// Simple POST route
app.post('/data', (req, res) => {
  const data = req.body;
  res.send(`You sent: ${JSON.stringify(data)}`);
});

// Simple route with a URL parameter
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID is: ${userId}`);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
