const fetch = require('node-fetch');

async function getAccessToken() {
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const tokenEndpoint = 'https://test.api.amadeus.com/v1/security/oauth2/token';

  try {
    const response = await fetch(tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });

    if (response.ok) {
      const data = await response.json();
      const accessToken = data.access_token;
      console.log('Access token obtained:', accessToken);
      return accessToken;
    } else {
      const errorData = await response.json();
      console.error('Error getting access token:', errorData.error_description);
      throw new Error('Error getting access token');
    }
  } catch (error) {
    console.error('Error getting access token:', error.message);
    throw error;
  }
}


getAccessToken();
