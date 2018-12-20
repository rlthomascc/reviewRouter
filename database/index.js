const mongoose = require('mongoose');
const config = require('../sensitive.js');
// mongoose.connect('mongodb://localhost/delrealgroup/Reviews');
mongoose.connect('mongodb://TheDelRealGroup:' + config.pass + '@ds245357.mlab.com:45357/thedelrealgroup')

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB has connected');
});

let reviewSchema = ({
  fullName: {type: String, unique: true},
  experienceRating: String,
  recommendationRating: String,
  review: String,
  marketingConsent: String,
  improvements: String
});

let Review = mongoose.model('Review', reviewSchema)

function save(e) {
  let obj = new Review({
    fullName: e.fullName,
    experienceRating: e.experienceRating,
    recommendationRating: e.recommendationRating,
    review: e.review,
    marketingConsent: e.marketingConsent,
    improvements: e.improvements
  });
  obj.save()

}


let funcs = { Review, save }
module.exports = funcs;