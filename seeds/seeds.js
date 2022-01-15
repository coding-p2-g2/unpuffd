const sequelize = require('../config/connection');
const seedAroma = require('./aromaData');
const seedEffect = require('./effectData');
const seedReview = require('./reviewData');
const seedStrain = require('./strainData');
const seedStrainType = require('./strainTypeData');
const seedUsage = require('./usageData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUser();

  await seedAroma();

  await seedEffect();
  
  await seedStrainType();
  
  await seedUsage();

  await seedStrain();

  await seedReview();
  
  process.exit(0);
};

seedAll();