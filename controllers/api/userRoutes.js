const router = require('express').Router();
const { User } = require('../../models');
const withAuth = require('../../utils/auth');

// user GET - http://localhost:3001/api/users/
router.get('/', (req, res) => {
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(userData => res.json(userData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// user login POST - http://localhost:3001/api/users/login
router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    }).then(userData => {
        if (!userData) {
            res.status(400).json({ message: 'No user with that email address!' });
            return;
        }

        const validPassword = userData.checkPassword(req.body.password);

        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect password!' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.username = userData.username;
            req.session.password = userData.password;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    });
});

// user create/signup POST - http://localhost:3001/api/users/
router.post('/', (req, res) => {
    User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(userData => {
        req.session.save(() => {
          req.session.user_id = userData.id;
          req.session.username = userData.username;
          req.session.email = userData.email;
          req.session.logged_in = true;
  
          res.json(userData)
        })
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  // user logout if logged in POST - http://localhost:3001/api/users/logout
router.post('/logout', withAuth, (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;
