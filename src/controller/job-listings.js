const axios = require('axios');
const constants = require("../utils/constants");

exports.getDataFromAPI = async (req, res) => {
  try {
    console.info ('Fetching data from 3rd party API');

    const { API_URL } = constants;
    console.info ({API_URL});

    const jobs = await axios.get(`http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=524ca37a&app_key=18341cc2dace58d47cf4448b443c7948&results_per_page=20&what=javascript%20developer&content-type=application/json`, { timeout: 10000 });

    console.info ({jobs: jobs.data});

    return res.status(200).send(jobs);

  } catch (error) {
    console.error('Error fetching data from 3rd party API:', error);
    res.status(500).send('Error fetching data');
  }
};