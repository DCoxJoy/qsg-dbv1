const express = require('express');
const {getQsguide, getQsguides, createQsguide } = require('../controllers/qsquides.js')
const router = express.Router();

router
.route('/')
.get(getQsguides)
.post(createQsguide)

router.route('/:id')
.get(getQsguide)


module.exports = router;