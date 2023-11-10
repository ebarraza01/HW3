const shop = require("../routes/shopHub");

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
    res.render('sales',
        {
            from: 'sales'
        })
}
exports.cust = (req, res, next) => {
    res.render('cust',
        {
            from: 'cust'
        })
}
