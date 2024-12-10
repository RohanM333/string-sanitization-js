// server.js
const express = require('express');
const bodyParser = require('body-parser');
const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');

// Create a DOMPurify instance
const window = new JSDOM('').window;
const dompurify = DOMPurify(window);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware to sanitize input
app.use((req, res, next) => {
  if (req.body && req.body.content) {
    req.body.content = dompurify.sanitize(req.body.content);
  }
  next();
});

app.post('/submit', (req, res) => {
  const sanitizedContent = req.body.content;
  // Here you would typically save sanitizedContent to a database
  res.send(`Received sanitized content: ${sanitizedContent}`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
