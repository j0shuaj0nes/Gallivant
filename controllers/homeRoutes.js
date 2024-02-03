const router = require('express').Router();
const { City, User } = require('../models');
const withAuth = require('../utils/auth');

// This route handler renders the 'home' view
router.get('/', async (req, res) => {
  res.render('home');
});

// This route handler renders the 'preference' view
router.get('/preference', async (req, res) => {
  console.log('Accessed the preference route');
  res.render('preference');
});

// This route handler renders the 'activites' view
router.get('/activities', async (req, res) => {
  console.log('Accessed the activity route');
  res.render('activities');
});

// This route handler renders the 'poi' view
router.get('/poi', async (req, res) => {
  console.log('Accessed the poi route');
  res.render('poi');
});



// Use withAuth middleware to prevent access to route
router.get('/preference', withAuth, async (req, res) => {

  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: Project }],
    });

    const user = userData.get({ plain: true });


    res.render('preference', {

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


module.exports = router;
