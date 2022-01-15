const { StrainType } = require('../models');

const strainTypeData = [
  {
    strain_name: 'Indica'
  },
  {
    strain_name: 'Sativa'
  },
  {
    strain_name: 'Hybrid'
  } 
];

const seedStrainType = () => StrainType.bulkCreate(strainTypeData);

module.exports = seedStrainType;