const express = require('express');
const router = express.Router();
const controller = require("../../controllers/clients/products.controller");

router.get("/", controller.index);

router.get("/detail/:value", controller.detail);

module.exports = router;
