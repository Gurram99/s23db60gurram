var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('Vechile', { title: 'Search Results Vechile' });
});

module.exports = router;
