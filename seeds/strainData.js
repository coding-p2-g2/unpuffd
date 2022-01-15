const { Strain } = require('../models');

const strainData = [
  {
    strain_name: 'Blue Dream',
    description: "A potent cross between the ever popular classic strains Blueberry and Haze, a slightly sativa-dominant strain shrouded in mystery. With a relatively high THC_level range that averages at a low of 17% and a high of 24%, this dreamy bud has more than just good looks and flavor to bring to the table. The delicious flavors of blueberry and sugar are long lasting and stay in the air and on your tongue long after the smoke has gone. The nugs are long and bushy, with deep blue hues, amber and blue hairs, and an abundance of milky white trichomes. Users who suffer from anxiety disorders are not recommended to use this strain as it has a tendency to get ahead of you quickly and could definitely agitate pre-existing conditions. However, because it is super potent it does have extremely beneficial elements for patients who suffer from chronic fatigue, depression, and lack of appetite.",
    thc_level:"18%",
    strain_type_id: 3,
    effect_id: 1,
    usage_id: 1,
    aroma_id: 1,
    review_id: null,
},
{
    strain_name: 'Acapulco Gold',
    description: "Acapulco Gold is a Sativa dominant hybrid known for the golden hue of its green and/or brownish buds. This old strain is said to produce a powerful cerebral high that raises one's mood without producing overpowering feelings of happiness. Instead, the cerebral high mixes with a calming body high for a relaxing experience. Sufferers of disorders such as General Anxiety Disorder or PTSD use this strain to find relief from stress and anxiety. Those dealing with depression use it to lift their mood. The body high can also relieve chronic aches and pains.",
    thc_level:"23%",
    strain_type_id: 2,
    effect_id: 2,
    usage_id: 1,
    aroma_id: 1,
    review_id: null,
  },
  {
    strain_name: 'Gelato',
    description: "Gelato is a hybrid crossed from taste-engineered parents Thin Mint Girl Scout Cookies and fruity indica Sunset Sherbert. With a balanced, mellow high and a universally appealing flavor profile, this is a great strain for social use. This is a strain with immediate visual appeal: bright orange pistils stand out against forest green leaves that are accented by shades of deep purple. The purple hues come about when high concentrations of pigments called anthocyanins are stimulated by cold weather in the vegetative stage.Medically, Gelato has value as a way to treat chronic aches and pains with its powerful numbing effects. Some use it to medicate headaches and migraines as well. The carefree elevation of mood can also offer temporary relief from the troubling symptoms associated with anxiety, depression, and PTSD.",
    thc_level:"25%",
    strain_type_id: 3,
    effect_id: 3,
    usage_id: 2,
    aroma_id: 3,
    review_id: null,
  },
  

  
];

const seedStrain = () => Strain.bulkCreate(strainData);

module.exports = seedStrain;