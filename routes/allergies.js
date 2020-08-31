var router = require('express').Router();
var allergiesCtrl = require('../controllers/allergies');

// GET /users
router.get('/users/:id/allergies/new', isLoggedIn, allergiesCtrl.index)
router.post('/users/<%= user._id %>/allergies/new', isLoggedIn, allergiesCtrl.create);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router;