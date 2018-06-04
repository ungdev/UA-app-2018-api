const express = require('express');
const models  = require('../models');

const router = new express.Router();

router.get('/sales', (req, res, next) => {
    res
        .status(200)
        .json(models.sale)
        .end();
});

router.get('/sales/:id', (req, res, next) => {
  const id = req.params.id;
  models.sale.where({_id: id}).findOne((err,sale) => {
    if (sale) {
      res
        .status(200)
        .json(sale)
        .end()
    } else {
      res
        .status(204)
        .end()
    }
  });
});

module.exports = router;
