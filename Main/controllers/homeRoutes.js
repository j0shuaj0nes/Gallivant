const router = require('express').Router();
const { City, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const cityData = await City.findAll({ });
    const cities = cityData.map((city) => city.get({ plain: true }));

    res.render('homepage', { 
      cities, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

// Handle form submission and redirect to POI route
router.get('/poi', async (req, res) => {
  const { city, option1, option2 } = req.query;

  // Redirect to POI route with selected city and preferences
  res.redirect(`/poi?city=${city}&option1=${option1}&option2=${option2}`);
});

module.exports = router;
