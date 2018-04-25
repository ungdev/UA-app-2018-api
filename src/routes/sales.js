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
    const id = parseInt(req.params.id);

    const sales = models.sale.filter(sale => sale.id === id);

    res
        .status(200)
        .json(sales)
        .end();
});

module.exports = router;
