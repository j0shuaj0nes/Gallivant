const router = require('express').Router();
const City = require('../../models/City');
const Amadeus = require('amadeus')

//Finds the selected city by the user
router.get('/:tempCity', async (req, res) => {
  //   console.log('Accessed the activity route');
  try {
    const cityData =  await City.findOne({
      where: {
        name: req.params.tempCity 
      }
    })

const cityInfo = cityData.get({plain:true})
console.log(cityInfo)

//Initialises the Amadeus API with the client ID and client secret
  const amadeusData =  new Amadeus({
    clientId: process.env.CLIENT_ID, 
      clientSecret: process.env.CLIENT_SECRET,
    })
    
//The Amadeus API returns the points of interests based on the city's coordinates
   const amadeusReturn = await amadeusData.referenceData.locations.pointsOfInterest.bySquare.get({
    north: cityInfo.latitudeNorth,
      west: cityInfo.latitudeWest, 
      south: cityInfo.latitudeSouth,
      east: cityInfo.latitudeEast
    })

    res.json(JSON.parse(amadeusReturn.body))
  //  console.log(amadeusReturn.body);
    

  } catch (error) {
    console.error('Error making API request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});



module.exports = router; 
