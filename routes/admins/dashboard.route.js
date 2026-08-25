const express = require('express');
const router = express.Router();
const controller = require('../../controllers/admins/dashboard.controller');

router.get('/', controller.dashboard);

module.exports = router;