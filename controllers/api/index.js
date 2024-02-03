const router = require('express').Router();
const userRoutes = require('./userRoutes');
const activityRoute = require('./activityRoute');
const POIRoute = require('./POIRoute');

router.use('/users', userRoutes);
router.use('/activities', activityRoute);
router.use('/poi', POIRoute);

module.exports = router;
