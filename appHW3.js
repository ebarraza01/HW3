const express = require("express");
const app = express();
app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views
const shopRoutes =require('./routes/shopHub')
const db = require("./util/cDataBase");

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
