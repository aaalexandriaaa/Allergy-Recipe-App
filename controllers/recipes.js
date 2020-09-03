const User = require('../models/user');
const Allergy = require('../models/allergy');
const Recipe = require('../models/recipe');
const user = require('../models/user');

module.exports = {
    index,
    new: newRecipe,
    create,
    search,
    update
};

function index(req, res) {
    Recipe.find()
        .then((recipes) => {
            res.render('recipes/search', {
                title: "All Recipes",
                user: req.user,
                recipes: recipes.reverse()
            })
        })
}

function newRecipe(req, res) {
    res.render('recipes/new', {
        title: 'Add Recipe',
        user: req.user,
    })
}

function create(req, res) {
    Allergy.create(req.body)
        .then((allergy) => {
            console.log("ALLERGY", allergy)
            req.body.allergies = allergy._id
            console.log("REQBODY", req.body)
            req.body.user = req.user._id
            console.log("REQBODY", req.body)
            Recipe.create(req.body)
                .then((recipe) => {
                    console.log("RECIPE", recipe)
                    //res.redirect('/recipes')
                    res.render('recipes/showNewRecipe', {
                        title: recipe.name,
                        user: req.user,
                        recipe,
                        allergy


                    })
                })
        })
}

function search(req, res) {
    console.log(req.body)
    Allergy.find({
            $or: [req.body]
        })
        .then((allergyID) => {
            console.log(allergyID)
            Recipe.find({
                    allergies: allergyID
                })
                .then((recipes) => {
                    res.render('recipes/search', {
                        title: 'Recipe Search',
                        recipes,
                        allergies: allergyID,
                        user: req.user._id
                    })

                })
        })
}

function update(req, res) {
    console.log(req.params.id)
    Recipe.findById(req.params.id)
        .then((recipe) => {
            User.findById(recipe.user)
                .then((user) => {
                    res.render('recipes/update', {
                        title: "Recipe Update",
                        user,
                        recipe

                    })
                })

        })

    // Recipe.findById(req.body.)
    // res.render('recipes/update', {
    //     title: `
    // })
}