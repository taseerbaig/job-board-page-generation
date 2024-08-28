import dotenv from 'dotenv';

// Add data from env file
dotenv.config();

const constants = {
  API_URL: 'http://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=524ca37a&app_key=18341cc2dace58d47cf4448b443c7948',
  REQUEST_TIMEOUT: 10000 // 10 seconds
};

export default constants;
