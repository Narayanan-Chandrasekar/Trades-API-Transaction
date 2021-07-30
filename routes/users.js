var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Hi! I copied the files onto local!!');
});

module.exports = router;
