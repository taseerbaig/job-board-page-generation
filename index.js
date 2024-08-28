import express from 'express';
import cors from 'cors';
import routes from './src/routes/routes.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = 3000;

// Enable CORS for all routes
app.use(cors());

// Use the routes defined in routes.js
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
