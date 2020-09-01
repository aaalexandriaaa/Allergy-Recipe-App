const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var recipeSchema = Schema({
    name: {
        type: String
    },
    imageUrl: {
        type: String
    },
    recipeUrl: {
        type: String
    },
    blogName: {
        type: Boolean,
        default: false
    },
    allergies: {
        type: Schema.Types.ObjectId,
        ref: 'Allergy'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);