var router = require('express').Router();
var recipesCtrl = require('../controllers/recipes');
const recipe = require('../models/recipe');

// GET /users
router.get('/recipes/search', isLoggedIn, recipesCtrl.index);
router.get('/recipes/new', isLoggedIn, recipesCtrl.new)
router.post('/recipes/new', isLoggedIn, recipesCtrl.create)
router.post('/recipes/search', isLoggedIn, recipesCtrl.search)
router.put('/recipes/:id/update', isLoggedIn, recipesCtrl.update)
router.delete('/recipes/:id', isLoggedIn, recipesCtrl.removeRecipe)
router.get('/recipes/:id/update', isLoggedIn, recipesCtrl.show)


//router.get('/users/profile', isLoggedIn, usersCtrl.showProfile);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

// function isCreator(req, res, next) {
//     if (req.isAuthenticated() && req.user._id === recipe.user) return next();
//     res.redirect("/auth/google");
// }


module.exports = router;