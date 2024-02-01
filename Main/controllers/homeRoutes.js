const router = require('express').Router();
const { City, User } = require('../models');
const withAuth = require('../utils/auth');

// This route handler renders the 'main' view
router.get('/', async (req, res) => {
  res.render('home');
});



router.get('/', async (req, res) => {
  console.log('Accessed the preference route');
  res.render('preference');
});


router.get('/', async (req, res) => {
  try {
    // Fetch city data
    const cityData = await City.findAll({});
    const cities = cityData.map((city) => city.get({ plain: true }));

    // Respond with JSON containing city data
    res.json({ cities, logged_in: req.session.logged_in });
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

// Handle the form submission
router.post('/submit-form', (req, res) => {
  const { city, option } = req.body;

  //redirect to a specific route
  if (option === 'option1') {
    res.redirect(`/poi?city=${city}`);
  } else if (option === 'option2') {
    res.redirect(`/tours?city=${city}`);
  } else {
    // Handle other cases or show an error
    res.status(400).send('Invalid option selected');
  }
});

module.exports = router;
