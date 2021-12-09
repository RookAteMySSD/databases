var db = require('../db');
var mysql = require('mysql2');

// console.log(db);
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');

});



module.exports = {
  getAll: function () {
    let sql = 'SELECT * FROM messages'; //<-------- where run all sql code
    connection.query(sql, (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
    });
  }, // a function which produces all the messages
  create: function (text) {

    let sql = `insert into messages values( '${text}', 'roomtest', 'user')`;
    connection.query(sql, [true], (error, results, fields) => {
      if (error) {
        return console.error(error.message);
      }
      console.log(results);
    });
  } // a function which can be used to insert a message into the database
};

module.exports.create('test');

// let mysql = require('mysql');
// let config = require('./config.js');

// let connection = mysql.createConnection(config);

// let sql = `SELECT * FROM messages`; //<-------- where run all sql code
// connection.query(sql, (error, results, fields) => {
//   if (error) {
//     return console.error(error.message);
//   }
//   console.log(results);
// });

// connection.end();