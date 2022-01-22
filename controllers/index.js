const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes')
const reviewsRoutes = require('./reviewsRoutes');
const strainRoutes = require('./strainRoutes');
const dashboardRoutes = require('./dashboardRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/reviews', reviewsRoutes);
router.use('/strains', strainRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;
