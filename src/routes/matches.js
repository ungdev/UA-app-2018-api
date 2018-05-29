const express = require('express');
const models  = require('../models');
const mongoose = require('mongoose');

const router = new express.Router();

router.get('/matches', (req, res, next) => {
  models.match.find((err,matches) => res
    .status(200)
    .json(matches)
    .end())
});

router.get('/matches/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const match = models.match.findOne({_id: id}).cast;
  if (match) {
    res
      .status(200)
      .json(match)
      .end()
  } else {
    res
      .status(204)
  }
});

module.exports = router;
