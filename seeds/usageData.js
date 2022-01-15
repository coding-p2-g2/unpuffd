const { Usage } = require('../models');

const usageData = [
  {
    usage_name: 'Anxiety/Depression'
  },
  {
    usage_name: 'Pain'
  },
  {
    usage_name: 'Insomnia'
  },
  {
    usage_name: 'Stress'
  },
  {
    usage_name: 'Focus'
  }
];

const seedUsage = () => Usage.bulkCreate(usageData);

module.exports = seedUsage;