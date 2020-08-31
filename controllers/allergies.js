const Allergy = require('../models/allergy');
const User = require('../models/user');


module.exports = {
    create
};

function create(req, res) {
    console.log("REQ.BODY", req.body)
    Allergy.create(req.body)
        .then(allergy => {
            console.log("ALLERGY", allergy)
            console.log("ALLERGY_ID", allergy._id)
            User.findByIdAndUpdate(req.params.id, {
                    allergies: [allergy._id]
                }, {
                    new: true
                })
                .then(() => {
                    res.redirect('/users/profile')
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
//     })