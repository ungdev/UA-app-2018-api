const express = require('express');
const models  = require('../models');

const router = new express.Router();

router.get('/groups', (req, res, next) => {
    res
        .status(200)
        .json(models.group)
        .end();
});

router.get('/groups/:id', (req, res, next) => {
  const id = req.params.id;
  models.group.where({_id: id}).findOne((err,group) => {
    if (group) {
      res
        .status(200)
        .json(group)
        .end()
    } else {
      res
        .status(204)
        .end()
    }
  });
});

module.exports = router;
