const express = require('express');
const router = express.Router();
const { fcmController } = require('../controller')

router.post("/push-notif", fcmController.pushFCM);

module.exports = router;
