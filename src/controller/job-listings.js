import constants from '../utils/constants.js';
import fetch from 'node-fetch';

const getDataFromAPI = async (req, res) => {
  try {
    console.info('Fetching data from 3rd party API');

    const { API_URL } = constants;
    console.info({ API_URL });

    const jobsResponse = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000 // Adjust this timeout if necessary
    });

    const jobs = await jobsResponse.json();

    return res.status(200).send(jobs);

  } catch (error) {
    console.error({ error });
    res.status(500).send('Error fetching data');
  }
};

export default { getDataFromAPI };

