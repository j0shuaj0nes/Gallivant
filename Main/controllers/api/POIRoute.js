const axios = require('axios');
const router = require('express').Router();
const apiKey = process.env.CLIENT_ID;
const cityData = [];


router.get('/api/pois', async (req, res) => {
    console.log('Accessed the POI route');
  try {
    const selectedCity = req.params.city;
    const city = cityData.find(c => c.name.toLowerCase() === selectedCity.toLowerCase());

    if (!city) {
      return res.status(404).json({ error: 'City not found' });
    }
    const { north, west, south, east, limit = 10, offset = 0, categories } = req.query;

    const response = await axios.get('https://test.api.amadeus.com/v1/reference-data/locations/pois/by-square', {
      params: {
        north,
        west,
        south,
        east,
        'page[limit]': limit,
        'page[offset]': offset,
        categories,
      },
      headers: {
        'Authorization': `Bearer ${apiKey}`,
      },
    });

    res.json(response.data);
  } catch (error) {
    console.error('Error making API request:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
