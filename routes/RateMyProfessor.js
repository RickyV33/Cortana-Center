const express = require('express');
const router = express.Router();
const rmp = require('rmp-api');

router.get('/', function (req, res, next) {
  const first = req.query.first;
  const last = req.query.last;
  if (first && last) {
    res.header('Access-Control-Allow-Origin', 'https://www.banweb.pdx.edu');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    const psu = rmp('Portland State University');
    psu.get(`${first} ${last}`, result => {
      res.status(200).json();
    });
  } else {
    next();
  }
});

module.exports = router;
