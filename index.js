const axios = require('axios');

exports.getDataFromAPI = async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/data');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data from 3rd party API:', error);
    res.status(500).send('Error fetching data');
  }
};