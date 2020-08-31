const Allergy = require('../models/allergy');
const User = require('../models/user');
const user = require('../models/user');
const {
    NotImplemented
} = require('http-errors');


module.exports = {
    create,
    index
};

function create(req, res) {
    User.findById(req.user._id)
        .then((user) => {
            // if (user.allergies) {
            Allergy.create(req.body)
                .then((allergy) => {
                    console.log(req.body)
                    console.log(user.name)
                    console.log(allergy._id)
                    user.allergies = allergy._id
                    console.log(user.allergies)
                    res.redirect('/users/profile')
                })
            // } else {
            //     console.log("ELSE")
            //     console.log(req.body)
            //     console.log(user.allergies)
            //     Allergy.findByIdAndUpdate(user.allergies, req.body, {
            //             new: true
            //         })
            //         .then((allergy) => {
            //             res.redirect('/users/profile')
            //         })
            // }
        })
}


function index(req, res) {
    console.log("INDEX")
    User.findById(req.user._id)
        .then((user) => {
            console.log(user)
            Allergy.findById(user.allergies)
                .then(allergy => {
                    console.log(allergy)
                    res.render('allergies/new', {
                        title: 'Profile Page',
                        user,
                        allergy

                    })
                })
        })
}


// CREATING A NEW ALLERGY DB ENTRY: 
////////////////////////////////////
// req.params.id gives me the user's _id
// req.body = {submit: 'Add Allergy'}
// create a new allergy db entry
// take that new entry's _id & replace the user's allergy objectID with the new allergy's id which is equal to allergy._id
// so the flow here is: 
// take the inform




// req.body.flight = req.params.id
// Ticket.create(req.body)
//     .then(ticket => {
//         console.log(ticket)
//         res.redirect(`/flights/${req.params.id}`)