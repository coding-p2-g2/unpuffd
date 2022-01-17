const router = require('express').Router();
const { Aroma, Effect, Review, Strain, StrainType, Usage, User } = require('../models');


router.get('/', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('ageAuth');
});

router.get('/homepage', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
