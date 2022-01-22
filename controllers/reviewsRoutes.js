const router = require('express').Router();
const { Review, Strain, User } = require('../models');
const withAuth = require('../utils/auth');

// GET all user reviews - http://localhost:3001/reviews/
router.get('/', withAuth, async (req, res) => {
    try {
        const reviewData = await User.findAll({
            attributes: [
                'id',
                'username',
            ],
            include: [
                {
                    model: Strain, through: Review, as: 'user_strains',
                }
            ]

        });

        const userReviews = reviewData.filter(user => user.id === req.session.user_id)

        const reviews = userReviews[0].user_strains.map(data => {
            return { strain_name: data.strain_name, comment: data.review.comment, rating: data.review.rating, date_created: data.review.date_created }
        })

        if (!reviewData) {
            res.status(404).json({ message: 'No user found with that id!' });
            return;
        }
     
        res.render('myreviews', {
            reviews,
            logged_in: req.session.logged_in
        });
        // res.status(200).json(reviews);
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

module.exports = router;