const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var userSchema = Schema({
  name: String,
  email: String,
  avatar: String,
  googleId: String,
  allergies: {
    type: Schema.Types.ObjectId,
    ref: 'Allergy'
  },
  recipes: {
    type: Schema.Types.ObjectId,
    ref: 'Recipe'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

//USER MODEL: ID, name, alias, email, avatar, google ID, friends IDs, restrictions ID, recipes added [ids], reviews/notes left, tagged
//RECIPE/POST MODEL: name, url, photo, review, user tags, poster's name, restrictions ID
//REVIEW MODEL: Dietary restrictions, have cooked, name of poster, tagging? 
//RESTRICTIONS MODEL: gf, df, sf, avo, mush, shell, tom, sulf, etc, USER id, RECIPE id