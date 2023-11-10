const express = require('express');
const router = express.Router();
const path = require('path');
const mainContoller = require("../controllers/mainController")

router.get( '/home', mainContoller.home );
router.get( '/products', mainContoller.products);
router.get( '/cust', mainContoller.cust);
router.get( '/sales', mainContoller.sales);
module.exports = router;