var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var submissionSchema = new Schema({
  firstName: String
  ,lastName: String
  ,phoneNumber: String
  ,email: String
  ,badgeId: String
  ,shopName: String
})

module.exports = mongoose.model('Submission', submissionSchema);
