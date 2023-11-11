const express = require('express');
const router = express.Router();
const path = require('path');
const mainController = require("../controllers/mainController")

router.get( '/home', mainController.home );
router.get( '/products', mainController.products);
router.get( '/addProduct', mainController.getAddProduct);
router.post( '/products', mainController.postAddProduct);
router.get( '/cust', mainController.cust);
router.get('/addCust', mainController.getAddCustomer );
router.post('/cust', mainController.postAddCustomer);
router.get('/updateCust', mainController.getUpdateCustomer );
router.post('/cust', mainController.postUpdateCustomer);
router.get( '/sales', mainController.sales);

module.exports = router;