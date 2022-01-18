const router = require('express').Router();
const userRoutes = require('./userRoutes');
const strainRoutes = require('./strainRoutes');

router.use('/users', userRoutes);
router.use('/strains', strainRoutes);

module.exports = router;