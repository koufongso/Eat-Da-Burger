// require mySQL database connection
var connection = require("./connection.js");

// define orm object
var orm = {
    /**
     * select all data from a given table
     * @param {string} table target table name
     * @param {function} cb callback function that handle the query result
     */
    selectAll: function (table, cb) {
        var query = "SELECT * FROM ?";
        connection.query(query, [table], function (err, res) {
            if (err) throw err;
            cb(res)
        });
    },

    /**
     * insert a data into the given table
     * @param {string} table target table name
     * @param {obj} data new data that needs to be insert
     * @param {function} cb callback function that handle the query result
     */
    insertOne: function (table, data, cb) {
        var query = "INSERT INTO ? SET ?";
        connection.query(query, [table, data], function (err, res) {
            if (err) throw err;
            cb(res)
        });
    },

    /**
     * update one or more specified table row(s)
     * @param {string} table target table name
     * @param {obj} newData updated data
     * @param {obj} condition condition that specify the table row(s)
     * @param {funciton} cb callback function that handle the query result
     */
    updateOne: function (table, newData, condition, cb) {
        var query = "UPDATE ? SET ? WHERE ?";
        connection.query(query, [table, newData, condition], function (err, res) {
            if (err) throw err;
            cb(res)
        });
    }
};

// export the orm object
module.exports = orm;