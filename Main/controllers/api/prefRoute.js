// controllers/preferenceRoute.js
const router = require('express').Router();

router.get('/', async (req, res) => {
  console.log('Accessed the preference route');
  res.render('preference');
});

module.exports = router;