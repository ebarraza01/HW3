const db = require("../util/cDataBase");

module.exports = class Sales {
    constructor(TotalSales, cName, itemN, itemQ, sDate) {
        this.totalSales = TotalSales;
        this.CustomerName = cName;
        this.ItemName = itemN;
        this.Quantity = itemQ;
        this.SalesDate = sDate;
    }
    static findById(cName) {
        return db.execute("select * from Sales where CustomerName = ?",
            [cName]);
    }
    
    static findByMonth() {
        return db.execute("SELECT DATE_FORMAT(SalesDate, '%Y-%m-%d') AS SalesDate," +
            " c.CustomerName, i.ItemName, s.Quantity, (i.ItemPrice * s.Quantity) AS TotalSales " +
            "FROM Sales s JOIN customer c " +
            "ON s.CustomerID = c.CustomerID JOIN item i " +
            "ON s.ItemID = i.ItemID WHERE MONTH(SalesDate) = MONTH(CURDATE()) " +
            "AND YEAR(SalesDate) = YEAR(CURDATE()) " +
            "ORDER BY SalesDate, c.CustomerName")
    }

    static fetchTop5() {
        return db.execute('SELECT' +
            '    DATE_FORMAT(s.SalesDate, \'%Y-%m\') AS SalesMonth,' +
            '    SUM(i.ItemPrice * s.Quantity) AS TotalSales' +
            'FROM' +
            '    Sales s' +
            'JOIN' +
            '    item i ON s.ItemID = i.ItemID' +
            'GROUP BY' +
            '    SalesMonth' +
            'ORDER BY' +
            '    TotalSales DESC' +
            'LIMIT 5;')
    }

    save() {
        return db.execute('insert into Sales (TotalSales, cName, itemN, itemQ, sDate) ' +
            'values (?, ?, ?, ?, ?)',
            [this.totalSales, this.CustomerName, this.ItemName, this.Quantity, this.SalesDate]
        )
    }
}