// Add data from env file

require('dotenv').config();

const { API_KEY, APP_ID} = process.env;

module.exports = {
  API_URL: `http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=${APP_ID}&app_key=${API_KEY}&results_per_page=20&what=javascript%20developer&content-type=application/json`
};

