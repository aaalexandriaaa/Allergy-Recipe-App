const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var allergySchema = Schema({
    gluten: Boolean,
    dairy: Boolean,
    eggs: Boolean,
    finFish: Boolean,
    shellfish: Boolean,
    treeNuts: Boolean,
    peanuts: Boolean,
    soybeans: Boolean
}, {
    timestamps: true
});

module.exports = mongoose.model('Allergy', allergySchema);