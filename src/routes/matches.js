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
  const id = req.params.id;
  models.match.where({_id: id}).findOne((err,match) => {
    if (match) {
      res
        .status(200)
        .json(match)
        .end()
    } else {
      res
        .status(204)
        .end()
    }
  });
});

module.exports = router;
