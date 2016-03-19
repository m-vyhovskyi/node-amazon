var express = require('express');
var router = express.Router();
var globals = require('../lib/globals');

/* GET home page. */
router.get('/', function(req, res) {
  var db = globals.database();
  res.render('index', {
    title: 'Photoalbums',
    db: db
  });
});

module.exports = router;
