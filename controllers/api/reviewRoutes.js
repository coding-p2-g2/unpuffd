const router = require('express').Router();
const { Review } = require('../../models');
const withAuth = require('../../utils/auth');

// create a review in the db if logged in - http://localhost:3001/api/reviews/
router.post('/', withAuth, (req, res) => {
    Review.create({
        strain_id: req.body.strain_id,
        rating: req.body.rating,
        comment: req.body.comment,
        user_id: req.session.user_id
    })
        .then(reviewData => res.json(reviewData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

module.exports = router;