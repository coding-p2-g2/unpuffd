const { Review } = require('../models');

const reviewData = [
  {
    comment: 'Great Stain, mellow body high, taste good not too skunky, can still get things done for the day, great for creativity.',
    rating: 5,
    strain_id: 8,
    user_id: 1
  },
  {
    comment: 'Very good smoke, mild taste not too strong or skunky, helped me get into my most creative mood, Mrs. Tart had me creating more art then i have in the last year, awesome strain',
    rating: 5,
    strain_id: 10,
    user_id: 2
  },{
    comment: 'OMG this strain had me glued to my couch, all I could do is beg god to have mercy on me, I thought I could take a nap before work and come down, that ish did not work, I was floating in the office singin a whole new world looking for Jasmine',
    rating: 2,
    strain_id: 7,
    user_id: 1
  }

];

const seedReview = () => Review.bulkCreate(reviewData);

module.exports = seedReview;