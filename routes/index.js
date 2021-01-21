var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { root: 'views' });
});

/* GET insta linkinbio page */
router.get('/links', function(req, res, next) {
  res.sendFile('links.html', { root: 'views' });
});

module.exports = router;

//NOTE: unused in github pages