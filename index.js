const express = require('express');
const routes = require('./src/routes/routes');

require('dotenv').config();

const app = express();
const port = 3000;

// Use the routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});