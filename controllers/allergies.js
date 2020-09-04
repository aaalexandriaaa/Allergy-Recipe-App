const Allergy = require('../models/allergy');
const User = require('../models/user');
const Recipe = require('../models/recipe')

module.exports = {
    index,
    create,
    update
};

function index(req, res) {
    User.findById(req.user._id)
        .then((user) => {
            console.log(user)
            Allergy.findById(user.allergies)
                .then(allergies => {
                    res.render('allergies/new', {
                        title: 'Add/Edit Allergies',
                        user,
                        allergies,
                        allergyArray: Object.keys(Allergy.schema.paths)

                    })
                })
        })
}

function create(req, res) {
    Allergy.create(req.body)
        .then((allergy) => {
            User.findById(req.user._id)
                .then((user) => {
                    user.allergies = allergy._id
                    user.save()
                    res.redirect('/users/profile')
                })
        })
}

function update(req, res) {
    User.findById(req.user._id)
        .then((user) => {
            Allergy.findByIdAndUpdate(user.allergies, req.body, {
                    new: true
                })
                .then((allergy) => {
                    res.redirect('/users/profile')
                })
        })
}