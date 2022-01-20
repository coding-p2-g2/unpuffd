const router = require('express').Router();
const { Aroma, Effect, Review, Strain, StrainType, Usage, User } = require('../models');
const withAuth = require('../utils/auth');

// dashboard GET - http://localhost:3001/dashboard/
router.get('/', withAuth, (req, res) => {
  Strain.findAll({
    attributes: [
      'id',
      'strain_name',
      'img',
    ],
  })
    .then(strainData => {
      const strains = strainData.map(strain => strain.get({ plain: true }));
      res.render('dashboard', {
        strains,
        logged_in: req.session.logged_in
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// // dashboard GET - http://localhost:3001/dashboard/myreviews
// router.get('/myreviews', withAuth, (req, res) => {
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
//     include: [
//       // {
//       //   model: User,
//       //   attributes: ['id', 'username'],
//       // }
//       {
//         model: User, through: Review, as: 'user_strains',
//         required: true
//       }
//     ]
//   })
//     .then(reviewData => {
//       // res.json(reviewData);
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

// router.get('/myreviews', withAuth, async (req, res) => {
//   try {
//     const reviewData = await Review.findAll({
//       where: {
//         user_id: req.session.user_id
//       },
//     });

//     if (!reviewData) {
//       res.status(404).json({ message: 'No user found with that id!' });
//       return;
//     }
//     const reviews = reviewData.map(review => review.get({ plain: true }));
//     res.render('myreviews', {
//       reviews,
//       logged_in: req.session.logged_in
//     });
//     res.status(200).json(reviewData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;