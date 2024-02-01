const router = require('express').Router();
const userRoutes = require('./userRoutes');
const activityRoute = require('./activityRoute');
const POIRoute = require('./POIRoute');
const prefRoute = require('./prefRoute');

router.use('/users', userRoutes);
router.use('/activity', activityRoute);
router.use('/POI', POIRoute);
router.use('/pref', prefRoute);

module.exports = router;
