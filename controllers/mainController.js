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
exports.getUpdateCustomer = (req, res, next) => {
    let id = req.params.id;
    let c = customers.findById(id)
    res.render('updateCust', {
        title: `Update record:${id} `,
        from: 'updateCust',
        customer : c
    })
}

exports.postUpdateCustomer = (req, res, next) => {
    let t = req.body.CustomerID;
    let a = req.body.CustomerName;
    let p = req.body.CustomerEmail;
    const customer = new customers(t, a, p);
    customer.save()

    res.redirect('/cust')

}
