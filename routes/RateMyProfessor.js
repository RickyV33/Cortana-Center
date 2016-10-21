const express = require('express');
const router = express.Router();

const rmp = require('rmp-api');
const _ = require('lodash');
const cors = require('cors');

// Add preflight request
router.options('/', cors());

router.get('/', cors(), (req, res, next) => {
  const first = req.query.first;
  const last = req.query.last;
  if (first && last) {
    const psu = rmp('Portland State University');
    psu.get(`${first} ${last}`, result => {
      res.status(200).json(_.pick(result,
        ['fname', 'lname', 'url', 'quality', 'easiness']));
    });
  } else {
    next();
  }
});

module.exports = router;
