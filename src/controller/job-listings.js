const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// GET request to fetch all items
app.get('/items', async (req, res) => {
  try {
    const response = await axios.get('https://api.example.com/items');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch items' });
  }
});

// GET request to fetch a single item by ID
app.get('/items/:id', async (req, res) => {
  try {
    const response = await axios.get(`https://api.example.com/items/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch item' });
  }
});

// POST request to create a new item
app.post('/items', async (req, res) => {
  try {
    const response = await axios.post('https://api.example.com/items', req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create item' });
  }
});

// PUT request to update an existing item by ID
app.put('/items/:id', async (req, res) => {
  try {
    const response = await axios.put(`https://api.example.com/items/${req.params.id}`, req.body);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update item' });
  }
});

// DELETE request to delete an item by ID
app.delete('/items/:id', async (req, res) => {
  try {
    const response = await axios.delete(`https://api.example.com/items/${req.params.id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete item' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});