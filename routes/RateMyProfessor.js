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
      let first = {};
      let last = {};
      first[result.fname] = _.pick(result, 'url', 'quality', 'easiness');
      last[result.lname] = first;
      res.status(200).json({'hi': 'hi'});
    });
  } else {
    next();
  }
});

module.exports = router;
