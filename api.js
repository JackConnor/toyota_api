var mongoose          = require('mongoose');

var Submission = require('./models/submissionModel.js');

module.exports = function(app){

  /////allow all permissions
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Origin", "http://localhost:8100");
    // res.header("Access-Control-Allow-Origin", "http://localhost:8101");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/jsonn', function(req, res){
    res.json('yo');
  });

  app.get('/new/submission', function(req, res){
    var sub = new Submission();
    console.log(sub);
    sub.firstName = 'jack';
    sub.save(function(err, newSub){
      res.json(newSub)
    })
  })

}
mongoose.connect("mongodb://jackconnor:Skateboard1@ds145315.mlab.com:45315/toyota_app");
