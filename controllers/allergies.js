const Allergy = require('../models/allergy');
const User = require('../models/user');
const Recipe = require('../models/recipe')

module.exports = {
    index,
    create,
    update
};

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

function create(req, res) {
    Allergy.create(req.body)
        .then((allergy) => {
            console.log(allergy)
            console.log(allergy._id)
            User.findById(req.user._id)
                .then((user) => {
                    console.log(user)
                    user.allergies = allergy._id
                    user.save()
                    res.render('users/profile', {
                        title: 'allergies',
                        allergy,
                        user
                    })
                })
        })
}

// function update(req, res) {
//     User.findById(req.user._id)
//         .then((user) => {
//         Allergy.fineOneAndReplace(user.allergies)
//     })
// }


function update(req, res) {
    console.log("REQBODY", req.body)
    User.findById(req.user._id)
        .then((user) => {
            Allergy.findById(user.allergies)
                .then((allergy) => {
                    // allergy.schema.eachPath(function (path) {
                    //     console.log(path); //this gives me all keys in an object
                    // })
                    let bigAllergy = Object.keys(Allergy.schema.paths);
                    let lilAllergy = Object.keys(allergy.schema.paths);
                    console.log("BIG", bigAllergy)
                    console.log("LIL", lilAllergy)
                    // props.forEach((el, idx) => {
                    //     for (i = 0; i < (props.length - 4); i++) {

                    //     }
                    // })




                    // Allergy.findByIdAndUpdate(user.allergies, req.body, {
                    //         new: true
                    //     })
                    //     .then((allergy) =>
                    console.log(allergy._id);
                })
            res.redirect('/users/profile')
        })
}


// User.findById(req.user._id)
//     .then((user) => {
//         Allergy.create(req.body)
//             .then((allergy) => {
//                 console.log(req.body)
//                 console.log(user.name)
//                 console.log(allergy._id)
//                 user.allergies = allergy._id
//                 console.log(user.allergies)
//                 res.redirect('/users/profile')
//             })
//     })


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