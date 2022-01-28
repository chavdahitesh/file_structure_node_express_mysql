const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// connection to database
const connection = mysql.createConnection({
  host: dbConfig.HOST || "127.0.0.1",
  user: dbConfig.USER || "root",
  password: dbConfig.PASSWORD || "root",
  database: dbConfig.DB || "test",
});

// open MySQL connection
connection.connect((error) => {
  if (error) throw error;
  console.log("db Connected !");
});

module.exports = connection;
