var router = require('express').Router();
var allergiesCtrl = require('../controllers/allergies');


router.get('/users/allergies/new', isLoggedIn, allergiesCtrl.index)
router.post('/users/allergies/new', isLoggedIn, allergiesCtrl.create);
router.put('/users/profile', isLoggedIn, allergiesCtrl.update);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}


module.exports = router;