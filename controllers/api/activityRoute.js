const router = require('express').Router();
const City = require('../../models/City');
const Amadeus = require('amadeus')

router.get('/:tempCity', async (req, res) => {
  //   console.log('Accessed the activity route');
  try {
    const cityData =  await City.findOne({
      where: {
        name: req.params.tempCity 
      }
    })
  
  const amadeusData =  new Amadeus({
      clientId: process.env.CLIENT_ID, 
      clientSecret: process.env.CLIENT_SECRET,
    })
   
   const amadeusReturn =  await amadeusData.shopping.activities.bySquare.get({
      north: 48.91,
      west: 2.25, 
      south: 48.80,
      east: 2.46
    })

    res.json(JSON.parse(amadeusReturn.body))
    // console.log(amadeusReturn.body);
    


  } catch (error) {
    console.error('Error making API request:', error);
    res.status(500).json({ error: 'Internal Server Error' })
  }
});

module.exports = router; 

