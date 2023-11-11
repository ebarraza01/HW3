const db = require("../util/cDataBase");

module.exports = class Customer {
    constructor(id, custName, custEmail) {
        this.CustomerID = id;
        this.CustomerName = custName;
        this.CustomerEmail = custEmail;
    }


    static fetchAll() {
        return db.execute("SELECT" +
            "        c.CustomerName," +
            "            c.CustomerEmail," +
            "            SUM(i.ItemPrice * s.Quantity) AS TotalSales" +
            "        FROM" +
            "        customer c" +
            "        JOIN" +
            "        Sales s ON c.CustomerID = s.CustomerID" +
            "        JOIN" +
            "        item i ON s.ItemID = i.ItemID" +
            "        GROUP BY" +
            "        c.CustomerID, c.CustomerName, c.CustomerEmail");

    }

    static findById(id) {
        return db.execute("select * from customer where id = ?",
            [id]);
    }

    save() {
        return db.execute('insert into customer (id, custName, custEmail) ' +
            'values (?, ?, ?)',
            [this.CustomerID, this.CustomerName, this.CustomerEmail]
        )
    }

    update(id) {
        return db.execute("UPDATE customer SET custEmail = ?, custName= ?  WHERE id = ?",
            [this.CustomerEmail, this.CustomerName, id]);
    }
}