const express = require('express');
const router = express.Router();
const { viraController } = require('../controller');

router.get('/inquiry-mutasi', viraController.inquiryMutasi);

module.exports = router;
