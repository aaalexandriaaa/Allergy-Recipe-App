const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var allergySchema = Schema({
    gluten: {
        Type: Boolean,
        default: true
    },
    dairy: {
        Type: Boolean,
        default: true
    },
    eggs: {
        Type: Boolean,
        default: true
    },
    finFish: {
        Type: Boolean,
        default: true
    },
    shellfish: {
        Type: Boolean,
        default: true
    },
    treeNuts: {
        Type: Boolean,
        default: true
    },
    peanuts: {
        Type: Boolean,
        default: true
    },
    soybeans: {
        Type: Boolean,
        default: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Allergy', allergySchema);