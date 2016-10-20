const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
  let first = req.query.first;
  let last = req.query.last;
  if (first && last) {
    res.header('Access-Control-Allow-Origin', 'https://www.banweb.pdx.edu');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  } else {
    next();
  }
});

module.exports = router;
