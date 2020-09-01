const User = require('../models/user');
const Allergy = require('../models/allergy');
const Recipe = require('../models/recipe')

module.exports = {
    index,
    new: newRecipe,
    create
};

function index(req, res) {
    Recipe.find()
        .then((recipe) => {
            console.log(recipe)
        })
}

function newRecipe(req, res) {
    User.findById(req.user._id)
        .then((user) => {
            res.render('recipes/new', {
                title: 'Add Recipe',
                user,
            })

        })
}

function create(req, res) {
    console.log(req.body)
}