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
exports.getAddProduct = (req, res, next) => {
    res.render('addProduct',
        {
            from: 'addProduct'
        })
}
exports.postAddProduct = (req, res, next) => {
    let id = req.body.ItemID;
    let n = req.body.ItemName;
    let p = req.body.ItemPrice;
    const customer = new products(id, n, p);
    customer.save()

    res.redirect('/cust')
}

exports.sales = (req, res, next) => {
    // sales.findByMonth( sList => {
    //     res.render( 'sales', {
    //         from: 'sales',
    //         sList : sList
    //     });
    // })
    res.render('sales', {
        from: 'sales',
    })
}
exports.cust = (req, res, next) => {
    // customers.fetchAll(cList => {
    //     res.render('cust',
    //         {
    //             from: 'cust',
    //             cList: cList
    //         })
    // })
    res.render('cust', {
        from: 'cust'
    })
}
exports.getAddCustomer = (req, res, next) => {
    res.render('addCust', {
        from: 'addCust'
    })
}
exports.postAddCustomer = (req, res, next) => {
    let id = req.body.CustomerID;
    let n = req.body.CustomerName;
    let email = req.body.CustomerEmail;
    const customer = new customers(id, n, email);
    customer.save()

    res.redirect('/cust')

}
exports.getUpdateCustomer = (req, res, next) => {
    let id = req.params.id;
    let c = customers.findById(id)
    res.render('updateCust', {
        from: 'updateCust',
        customer : c
    })
}

exports.postUpdateCustomer = (req, res, next) => {
    let id = req.body.CustomerID;
    let n = req.body.CustomerName;
    let email = req.body.CustomerEmail;
    const customer = new customers(id, n, email);
    customer.update()

    res.redirect('/cust')

}
