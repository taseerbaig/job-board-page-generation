const express = require('express');
const router = express.Router();
const controller = require('./controller');

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to fetch data from a 3rd party API
router.get('/api/data', controller.getDataFromAPI);

module.exports = router;