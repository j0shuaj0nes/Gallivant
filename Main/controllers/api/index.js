const router = require('express').Router();
const userRoutes = require('./userRoutes');
const activityRoute = require('./activityRoute');
const POIRoute = require('./POIRoute');

router.use('/users', userRoutes);
router.use('/activity', activityRoute);
router.use('/POI', POIRoute);

module.exports = router;
