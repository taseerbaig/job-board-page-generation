import constants from '../utils/constants.js';
import fetch from 'node-fetch';

const getDataFromAPI = async (req, res) => {
  try {
    console.info('Fetching data from 3rd party API');

    const { API_URL } = constants;
    const {
      limit,
      page,
      jobType,
      location
    } = req.query;

    const params = new URLSearchParams({
      results_per_page: limit,
      what: jobType,
      where: location,
    });

    const finalURL = `${API_URL}&${params}`;
    console.info ({finalURL});

    const jobsResponse = await fetch(finalURL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000 // Adjust this timeout if necessary
    });

    let jobs = await jobsResponse.json();

    const updatedJobSearch = jobs.results.map((job) => {
      const updJob = {};
      updJob.id = job.id;
      updJob.title = job.title;
      updJob.company = job.company.display_name;
      updJob.location = job.location.display_name;
      updJob.salary = job.salary_min;
      updJob.posted = job.created;
      return updJob;
    });

    return res.status(200).send({
      totalJobs: jobs.count,
      jobListings: updatedJobSearch
    });

  } catch (error) {
    console.error({ error });
    res.status(500).send('Error fetching data');
  }
};

export default { getDataFromAPI };

