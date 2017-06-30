var express = require('express'),
  router = express.Router();
  
try {
    var config = require('../local/config.js');
} catch (err) {
    console.log(err);
    var config = {};
}

var iCanHasData = require('./icanhasdata.json');
var iCanHasParams = require('./icanhasparams.json');

// index view
router.get('/', function(req, res) {
    res.render('index', {params:iCanHasParams});
});


router.get('/api', function(req, res){
    //something
    
    
    res.render('index', {results:results});
});

// 404 for any page that doesnt exist - This goes after all other views
router.get('*', function(req, res){
  res.status(404).send("This page doesn't exist... yet");
});

module.exports = router;