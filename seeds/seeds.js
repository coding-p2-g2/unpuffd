const sequelize = require('../config/connection');
const seedAroma = require('./Aroma');
const seedEffect = require('./Effect');
const seedReview = require('./Review');
const seedStrain = require('./Strain');
const seedStrainType = require('./StrainType');
const seedUsage = require('./Usage');
const seedUser = require('./User');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedAroma();

  await seedEffect();

  await seedReview();

  await seedStrain();

  await seedStrainType();

  await seedUsage();

  await seedUser();

  process.exit(0);
};

seedAll();