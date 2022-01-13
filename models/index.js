const Aroma = require('./Aroma');
const Effect = require('./Effect');
const Review = require('./Review');
const Strain = require('./Strain');
const StrainType = require('./StrainType');
const Usage = require('./Usage');
const User = require('./User');

// User hasMany Reviews
User.hasMany(Review, {
    foreignKey: 'user_id',
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Strain hasMany Reviews
Strain.hasMany(Review, {
    foreignKey: 'strain_id',
    onDelete: 'CASCADE'
});

Review.belongsTo(Strain, {
    foreignKey: 'strain_id',
    onDelete: 'CASCADE'
});

// Review hasOne Strain
Review.hasOne(Strain, {
    foreignKey: 'review_id',
    onDelete: 'CASCADE',
});

Strain.belongsTo(Review, {
    foreignKey: 'review_id',
});

// StrainType hasOne Strain
StrainType.hasOne(Strain, {
    foreignKey: 'strain_type_id',
    onDelete: 'CASCADE',
});

Strain.belongsTo(StrainType, {
    foreignKey: 'strain_type_id',
});

// Effect hasOne Strain
Effect.hasOne(Strain, {
    foreignKey: 'effect_id',
    onDelete: 'CASCADE',
});

Strain.belongsTo(Effect, {
    foreignKey: 'effect_id',
});

// Usage hasOne Strain
Usage.hasOne(Strain, {
    foreignKey: 'usage_id',
    onDelete: 'CASCADE',
});

Strain.belongsTo(Usage, {
    foreignKey: 'usage_id',
});

// Aroma hasOne Strain
Aroma.hasOne(Strain, {
    foreignKey: 'aroma_id',
    onDelete: 'CASCADE',
});

Strain.belongsTo(Aroma, {
    foreignKey: 'aroma_id',
});

module.exports = { Aroma, Effect, Review, Strain, StrainType, Usage, User }