const express = require('express');
const router = express.Router();
const { hwController } = require('../controller')

router.post("/oauth", hwController.oauthHW);
router.post("/push-notif", hwController.pushHW);

module.exports = router;
