const { User } = require('../models');

const userdata = [
  {
    username: 'Brianna',
    email: 'brianna@email.com',
    password: 'Password1',
  },
  {
    username: 'AshleyLee',
    email: 'ash@email.com',
    password: 'Password12',
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;