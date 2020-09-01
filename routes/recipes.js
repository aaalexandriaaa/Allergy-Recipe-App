var router = require('express').Router();
var recipesCtrl = require('../controllers/recipes');

// GET /users
router.get('/recipes', isLoggedIn, recipesCtrl.index);
router.get('/recipes/new', isLoggedIn, recipesCtrl.new)
router.post('/recipes/new', isLoggedIn, recipesCtrl.create)
//router.get('/users/profile', isLoggedIn, usersCtrl.showProfile);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router;