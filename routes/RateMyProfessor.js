const express = require('express');
const router = express.Router();

const rmp = require('rmp-api');
const _ = require('lodash');
const cors = require('cors');

const corsOptions = {
  origin: 'https://banweb.pdx.edu',
  // some legacy browsers (IE11, various SmartTVs) choke on 204
  optionsSuccessStatus: 200
};

router.get('/', cors(corsOptions), (req, res, next) => {
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
