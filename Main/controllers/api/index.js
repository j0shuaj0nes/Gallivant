const router = require('express').Router();
const userRoutes = require('./userRoutes');
const POIRoutes = require('./POIRoute');
const prefRoutes = require('./prefRoute');
const activityRoutes = require('./activityRoute');
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');


router.use('/users', userRoutes);
router.use('/POI', POIRoutes);
router.use('/pref', prefRoutes);
router.use('/tours', activityRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
