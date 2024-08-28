import express from 'express';
// import router from 'express.Router';
import controller from '../controller/job-listings.js';

const router = express.Router();

// Define your routes here
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route to fetch data from a 3rd party API
router.get('/api/data', controller.getDataFromAPI);

export default router;