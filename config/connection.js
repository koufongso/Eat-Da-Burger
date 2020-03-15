var mysql = require('mysql');

var config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'burgers_db'
}

var connection = mysql.createConnection(config);

connection.connect(function(err){
    if(err){
        console.error("error connecting: " + err.stack);
        return 
    }
    console.log("Connected to database %s as id %d",config.database, connection.threadId);
});

module.exports = connection;