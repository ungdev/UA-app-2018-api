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
    const id = parseInt(req.params.id);

    const groups = models.group.filter(group => group.id === id);

    res
        .status(200)
        .json(group)
        .end();
});

module.exports = router;
