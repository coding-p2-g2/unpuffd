const { Aroma } = require('../models');

const aromaData = [
  {
    aroma_name: 'Blueberry'
  },
  {
    aroma_name: 'Earthy'
  },
  {
    aroma_name: 'Sweet'
  },
  {
    aroma_name: 'Diesel'
  },
  {
    aroma_name: 'Grape'
  },
  {
    aroma_name: 'Berry'
  },
  
];

const seedAroma = () => Aroma.bulkCreate(aromaData);
console.log("aroma seed complete")

module.exports = seedAroma;