const sales = require("../models/SalesModel")
const customers = require("../models/custModel")
const products = require("../models/productModel")

exports.home = (req, res, next) => {
    res.render('home',
        {
            from: 'home'
        })
}
exports.products = (req, res, next) => {
    res.render('products',
        {
            from: 'products'
        })
}
exports.sales = (req, res, next) => {
    sales.findByMonth( sList => {
        res.render( 'sales', {
            from: 'sales',
            sList : sList[0]
        });
    }).catch(err => {
        console.log("DB Error=>");
        console.log(err)
    })

}
exports.cust = (req, res, next) => {
    res.render('cust',
        {
            from: 'cust'
        })
}
