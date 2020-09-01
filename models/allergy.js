const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var allergySchema = Schema({
    gluten: {
        type: Boolean,
        default: false
    },
    dairy: {
        type: Boolean,
        default: false
    },
    eggs: {
        type: Boolean,
        default: false
    },
    finFish: {
        type: Boolean,
        default: false
    },
    shellfish: {
        type: Boolean,
        default: false
    },
    treeNuts: {
        type: Boolean,
        default: false
    },
    peanuts: {
        type: Boolean,
        default: false
    },
    soybeans: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Allergy', allergySchema);