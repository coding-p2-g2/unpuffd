const router = require('express').Router();
const { Aroma, Effect, Review, Strain, StrainType, Usage, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET single-post by id - http://localhost:3001/api/strains/1
router.get('/:id', withAuth, (req, res) => {
    Strain.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'strain_name',
        'description',
        'thc_level',
        'img',
      ],
      include: [
        {
          model: StrainType,
          attributes: ['strain_name']
        },
        {
            model: Effect,
            attributes: ['effect_name']
        },
        {
            model: Usage,
            attributes: ['usage_name']
        },
          {
            model: Aroma,
            attributes: ['aroma_name']
        }, 
        {
          model: User, through: Review, as: 'user_strains'
        }
      ]
    })
      .then(strainData => {
        const strain = strainData.get({ plain: true });
        res.render('single-strain', {
          strain,
          logged_in: req.session.logged_in
        });
        if (!strainData) {
          res.status(404).json({ message: 'No strain found with that id' });
          return;
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;