const { Effect } = require('../models');

const effectData = [
  {
    effect_name: 'Creative'
  },
  {
    effect_name: 'Energetic'
  },
  {
    effect_name: 'Euphoric'
  },
  {
    effect_name: 'Relaxed'
  },
  {
    effect_name: 'Sleepy'
  }
];

const seedEffect = () => Effect.bulkCreate(effectData);

module.exports = seedEffect;