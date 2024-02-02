const router = require('express').Router();
const tempCity = 'Barcelona'
const {City} = require('../../models')
const Amadeus = require('amadeus')


router.get('/home', async (req, res) => {
  //   console.log('Accessed the POI route');
  try {
    const cityData =  await City.findOne({
      where: {
        name: tempCity
      }
    })
    
    const amadeusData =  new Amadeus({
    clientId: process.env.CLIENT_ID, 
      clientSecret: process.env.CLIENT_SECRET
    })
    // console.log(cityData);

   const amadeusReturn =  await amadeusData.referenceData.locations.pointsOfInterest.bySquare.get({
    where:{
      north: latitudeNorth,
      west: latitudeWest, 
      south: latitudeSouth,
      east: latitudeEast
    }
    })

    res.json(JSON.parse(amadeusReturn.body))

  } catch (error) {
    console.error('Error making API request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
