const db = require("../util/cDataBase");

module.exports = class Sales {
    constructor( sID, cID, itemID, itemQ, sDate ) {
        this.SalesID = sID;
        this.CustomerID = cID;
        this.ItemID = itemID;
        this.Quantity = itemQ;
        this.SalesDate = sDate;
    }
    save() {
        return db.execute( 'insert into Sales (cID, itemID, itemQ, sDate) ' +
            'values (?, ?, ?)',
            [this.CustomerID, this.ItemID, this.Quantity, this.SalesDate ]
        )
    }
    static fetchAll(){
        return db.execute( "select * from Sales");
    }
    static findById( id ){
        return db.execute( "select * from Sales where id = ?",
            [id] );
    }
}