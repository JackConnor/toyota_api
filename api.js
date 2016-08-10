var mongoose          = require('mongoose');

var Submission = require('./models/submissionModel.js');

module.exports = function(app){

  /////allow all permissions
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    // res.header("Access-Control-Allow-Origin", "http://localhost:5555");
    // res.header("Access-Control-Allow-Origin", "http://localhost:8101");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', function(req, res){
    res.json('made it');
  });

  app.get('/jsonn', function(req, res){
    res.json('yo');
  });

  app.get('/new/submission/:object', function(req, res){
    req.body = JSON.parse(req.params.object);
    var sub = new Submission();

    sub.firstName = req.body.firstName;
    sub.lastName = req.body.lastName;
    sub.email = req.body.email;
    sub.phoneNumber = req.body.mobileNumber;
    sub.shopName = req.body.shopName;
    sub.occupation = req.body.occupation;

    sub.save(function(err, newSub){
      res.json(newSub)
    })
  })

}
mongoose.connect("mongodb://jackconnor:Skateboard1@ds145315.mlab.com:45315/toyota_app");
