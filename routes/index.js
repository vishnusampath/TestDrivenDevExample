var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.send("Express");
});

router.get('/product/:n1/:n2', function(req, res, next){
  var num1 = parseInt(req.params.n1);
  var num2 = parseInt(req.params.n2);

  res.send(String(num1*num2));
});

router.get('/data', function(req, res, next) {
  var content = fs.readFileSync('./data/input.json');
  res.send(JSON.parse(content));              // will work
  //res.json(JSON.parse(content));              // will work
  //res.send(JSON.parse(content.toString()));   // will work
  //res.json(JSON.parse(content.toString()));   // will work
  //res.json(content.toString());               // will not work
  //res.json(content);                          // will not work
});

module.exports = router;
