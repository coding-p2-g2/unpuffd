const { Strain } = require('../models');

const strainData = [
  {
    strain_name: 'Blue Dream',
    description: "A potent cross between the ever popular classic strains Blueberry and Haze, a slightly sativa-dominant strain shrouded in mystery. With a relatively high THC_level range that averages at a low of 17% and a high of 24%, this dreamy bud has more than just good looks and flavor to bring to the table. The delicious flavors of blueberry and sugar are long lasting and stay in the air and on your tongue long after the smoke has gone. The nugs are long and bushy, with deep blue hues, amber and blue hairs, and an abundance of milky white trichomes. Users who suffer from anxiety disorders are not recommended to use this strain as it has a tendency to get ahead of you quickly and could definitely agitate pre-existing conditions. However, because it is super potent it does have extremely beneficial elements for patients who suffer from chronic fatigue, depression, and lack of appetite.",
    thc_level:"18%",
    effect_id: 1,
    usage_id: 1,
    aroma_id: 1,
    review_id: null,
},
{
    strain_name: 'Acapulco Gold',
    description: "Acapulco Gold is a Sativa dominant hybrid known for the golden hue of its green and/or brownish buds. This old strain is said to produce a powerful cerebral high that raises one's mood without producing overpowering feelings of happiness. Instead, the cerebral high mixes with a calming body high for a relaxing experience. Sufferers of disorders such as General Anxiety Disorder or PTSD use this strain to find relief from stress and anxiety. Those dealing with depression use it to lift their mood. The body high can also relieve chronic aches and pains.",
    thc_level:"23%",
    effect_id: 2,
    usage_id: 1,
    aroma_id: 1,
    review_id: null,

  },
{
    strain_name: 'Gelato',
    description: "",
    thc_level:"",
    effect_id: ,
    usage_id: 11,
    aroma_id: 1,
    review_id: null,

  },
{
    strain_name: '',
    description: "",
    thc_level:"",
    effect_id: ,
    usage_id: 11,
    aroma_id: 1,
    review_id: null,

  },
{
    strain_name: '',
    description: "",
    thc_level:"",
    effect_id: ,
    usage_id: 11,
    aroma_id: 1,
    review_id: null,

  },
{
    strain_name: '',
    description: "",
    thc_level:"",
    effect_id: ,
    usage_id: 11,
    aroma_id: 1,
    review_id: null,

  },
{
    strain_name: '',
    description: "",
    thc_level:"",
    effect_id: ,
    usage_id: 11,
    aroma_id: 1,
    review_id: null,

  },
{
    strain_name: '',
    description: "",
    thc_level:"",
    effect_id: ,
    usage_id: 11,
    aroma_id: 1,
    review_id: null,

  },
{
    strain_name: '',
    description: "",
    thc_level:"",
    effect_id: ,
    usage_id: 11,
    aroma_id: 1,
    review_id: null,

  },
{
    strain_name: '',
    description: "",
    thc_level:"",
    effect_id: ,
    usage_id: 11,
    aroma_id: 1,
    review_id: null,

  },
  
];

const seedStrain = () => Strain.bulkCreate(strainData);

module.exports = seedStrain;