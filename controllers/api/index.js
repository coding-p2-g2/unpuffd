const router = require('express').Router();

const userRoutes = require('./userRoutes');
const strainRoutes = require('./strainRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/strains', strainRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;