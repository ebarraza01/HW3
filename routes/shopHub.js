const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require("../controllers/mainController")

router.get( '/home', mainController.home );
router.get( '/products', mainController.products);
router.get( '/cust', mainController.cust);
router.get( '/sales', mainController.sales);
router.get('/addCust', mainController.getAddCustomer );
router.get('/updateCust', mainController.getUpdateCustomer );
router.post('/cust', mainController.postUpdateCustomer);

module.exports = router;