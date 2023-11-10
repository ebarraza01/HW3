const express = require("express");
const app = express();
app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views
const shopRoutes =require('./routes/shopHub')
const db = require("./util/cDataBase");
db.execute( "SELECT DATE_FORMAT(SalesDate, '%Y-%m-%d') AS SalesDate," +
    " c.CustomerName, i.ItemName, s.Quantity, (i.ItemPrice * s.Quantity) AS TotalSales " +
    "FROM Sales s JOIN customer c " +
    "ON s.CustomerID = c.CustomerID JOIN item i " +
    "ON s.ItemID = i.ItemID WHERE MONTH(SalesDate) = MONTH(CURDATE()) " +
    "AND YEAR(SalesDate) = YEAR(CURDATE()) " +
    "ORDER BY SalesDate, c.CustomerName")
    .then(result => {
        console.log("Res=")
        console.log(result)
    })
    .catch( err => {
        console.log("DB Err=" + err)
    })

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
app.use(shopRoutes);


app.get('*', function(req, res){
    res.render( 'notFound', {
        pageTitle: "404 Page Not Found"
    });
})

let port = 3021;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);
