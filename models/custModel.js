const db = require( "../util/cDataBase");

module.exports = class Customer {
    constructor(id, custName, custEmail) {
        this.CustomerID = id;
        this.CustomerName = custName;
        this.CustomerEmail = custEmail;
    }
    save() {
        return db.execute( 'insert into customer (custName, custEmail) ' +
            'values (?, ?, ?)',
            [this.CustomerName, this.CustomerEmail ]
        )
    }
    static delete( id ) {
        return db.execute( "delete from customer where id = ?",
            [id]
        )
    }
    static fetchAll(){
        return db.execute( "select * from customer");
    }
    static findById( id ){
        return db.execute( "select * from customer where id = ?",
            [id] );
    }
    update ( id ){
        return db.execute( "UPDATE customer SET custEmail = ?, custName= ?  WHERE id = ?",
            [this.CustomerEmail, this.CustomerName, id ] );
    }
}