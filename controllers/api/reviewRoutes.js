const router = require('express').Router();
const { Aroma, Effect, Review, Strain, StrainType, Usage, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all user reviews - http://localhost:3001/api/reviews/
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
        // const reviews = reviewData.map(review => review.get({ plain: true }));
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

// // dashboard GET - http://localhost:3001/api/reviews/
// router.get('/', withAuth, (req, res) => {
//   Review.findAll({
//     where: {
//       user_id: req.session.user_id
//     },
//     attributes: [
//       'id',
//       'comment',
//       'rating',
//       'date_created',
//     ],
//     order: [['date_created', 'DESC']],
//     include: User
//     //   {
//     //     model: User, through: Review, as: 'user_strains',
//     //     required: true
//     //   }

//   })
//     .then(reviewData => {
//       res.json(reviewData);
//       const reviews = reviewData.map(review => review.get({ plain: true }));
//       res.render('myreviews', {
//         reviews,
//         logged_in: req.session.logged_in
//       });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// myreviews create GET - http://localhost:3001/api/reviews/create
// router.get('/create', withAuth, async (req, res) => {
//     try {
//         const reviewData = await Review.findAll({
//             where: {
//                 user_id: req.session.user_id
//             },
//         });

//         if (!reviewData) {
//             res.status(404).json({ message: 'No reviews found!' });
//             return;
//         }
//         const reviews = reviewData.map(review => review.get({ plain: true }));
//         res.render('create-review', {
//             reviews,
//             logged_in: req.session.logged_in
//         });
//         // res.status(200).json(reviewData);
//     } catch (err) {
//         res.status(500).json(err);
//     }
// });

// create a review in the db if logged in - http://localhost:3001/api/posts/
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