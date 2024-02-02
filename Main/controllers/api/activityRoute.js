const axios = require('axios');
const router = require('express').Router();
const apiKey = process.env.CLIENT_ID;

router.get('/api/activity', async (req, res) => {
  console.log('Accessed the activity route');
try {
  const selectedCity = req.params.city;
  const city = cityData.find(c => c.name.toLowerCase() === selectedCity.toLowerCase());

  if (!city) {
    return res.status(404).json({ error: 'City not found' });
  }
  const { north, west, south, east} = req.query;

  const response = await axios.get('https://test.api.amadeus.com/v1/shopping/activities/by-square', {
    params: {
      north,
      west,
      south,
      east,
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
