var router = require('express').Router();
var usersCtrl = require('../controllers/users');


router.get('/', usersCtrl.index);
router.get('/users/profile', isLoggedIn, usersCtrl.showProfile);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router;
