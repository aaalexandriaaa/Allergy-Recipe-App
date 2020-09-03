const User = require('../models/user');
const Allergy = require('../models/allergy');
const Recipe = require('../models/recipe')

module.exports = {
  index,
  showProfile
};

function index(req, res) {
  User.find({})
    .then(users => {
      res.render('users/index', {
        title: "Users",
        user: req.user,
        users
      })
    })
}

function showProfile(req, res) {
  User.findById(req.user._id)
    .then((user) => {
      Recipe.find({
          user: req.user._id
        })
        .then((recipes) => {
          Allergy.findById(user.allergies)
            .then(allergies => {
              // allergies = allergies ? allergies : []
              res.render('users/profile', {
                title: `Welcome, ${user.name.split(" ")[0]}!`,
                user,
                allergies: allergies ? allergies : [],
                recipes,
                allergyArray: Object.keys(Allergy.schema.paths)
              })
            })
        })
    })
}