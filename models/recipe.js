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
        type: String
    },
    allergies: {
        type: Schema.Types.ObjectId,
        ref: 'Allergy'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Allergy'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);