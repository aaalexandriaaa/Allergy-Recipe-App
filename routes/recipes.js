var router = require('express').Router();
var recipesCtrl = require('../controllers/recipes');
const recipe = require('../models/recipe');


router.get('/recipes/search', isLoggedIn, recipesCtrl.index);
router.post('/recipes/search', isLoggedIn, recipesCtrl.search)
router.get('/recipes/new', isLoggedIn, recipesCtrl.new)
router.post('/recipes/new', isLoggedIn, recipesCtrl.create)
router.delete('/recipes/:id', isLoggedIn, recipesCtrl.removeRecipe)
router.get('/recipes/:id/update', isLoggedIn, recipesCtrl.show)
router.put('/recipes/:id', isLoggedIn, recipesCtrl.update)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

module.exports = router;