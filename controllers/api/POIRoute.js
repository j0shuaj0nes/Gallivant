const router = require('express').Router();
const tempCity = 'Barcelona';
const {City} = require('../../models');
const Amadeus = require('amadeus')

router.get('/', async (req, res) => {
  //   console.log('Accessed the POI route');
  try {
    const cityData =  await City.findOne({
      where: {
        name: tempCity
      }
    })
  //console.log(cityData);
    
  const amadeusData =  new Amadeus({
    clientId: process.env.CLIENT_ID, 
      clientSecret: process.env.CLIENT_SECRET,
    })
    // console.log(cityData);

   const amadeusReturn =  await amadeusData.referenceData.locations.pointsOfInterest.bySquare.get({
      north: 41.397158,
      west: 2.160873, 
      south: 41.394582,
      east: 2.177181
    })

    res.json(JSON.parse(amadeusReturn.body))
   console.log(amadeusReturn.body);
    

  } catch (error) {
    console.error('Error making API request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    res.status(404).json({ error: 'City not found' });
  }
});

// app.get('/', function(req, res) {
//   const context
  
//   app.get('acct:chars', function(err, result){
//       if(err) throw err
  
//       context = result;
//       console.log(result); 
//       res.render('/', context);
  
//       });
  
//   });


module.exports = router; 