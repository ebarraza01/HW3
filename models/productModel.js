const db = require("../util/cDataBase");

module.exports = class item {
    constructor( id, name, price ) {
        this.ItemID = id;
        this.ItemName = name;
        this.ItemPrice = price;
    }
    save() {
        return db.execute( 'insert into item (name, price) ' +
            'values (?, ?, ?)',
            [this.ItemName, this.ItemPrice ]
        )
    }
    static fetchAll(){
        return db.execute( "select * from item");
    }
    static findById( id ){
        return db.execute( "select * from item where id = ?",
            [id] );
    }
    update ( id ){
        return db.execute( "UPDATE item SET price = ?, name= ?  WHERE id = ?",
            [this.ItemPrice, this.ItemName, id ] );
    }
}