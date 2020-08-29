var router = require('express').Router();
var usersCtrl = require('../controllers/allergies');

// GET /users
router.post('/users/:id/allergies', isLoggedIn, usersCtrl.addAllergy);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router;