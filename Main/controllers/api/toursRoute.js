const axios = require('axios');
const router = require('express').Router();
const apiKey = process.env.CLIENT_ID;

router.get('/api/tours-and-activities', async (req, res) => {
    try {
      // Extract query parameters from the request
      const { latitude, longitude, radius, startDate, endDate } = req.query;
  
      // Make a GET request to Amadeus API
      const response = await axios.get('https://api.amadeus.com/v2/shopping/activities', {
        params: {
          latitude,
          longitude,
          radius,
          start_date: startDate,
          end_date: endDate,
        },
        headers: {
          'Authorization': `Bearer ${apiKey}`,
        },
      });
  
      // Send the response from Amadeus API to the client
      res.json(response.data);
    } catch (error) {
      console.error('Error making API request:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  module.exports = router;
