var db = require('../db');
var mysql = require('mysql2');

// console.log(db);
// let connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'chat'
// });

// connection.connect(function(err) {
//   if (err) {
//     return console.error('error: ' + err.message);
//   }

//   console.log('Connected to the MySQL server.');

// });



module.exports = {
  getAll: function (callback) {
    let sql = 'SELECT messages.id, messages.txt, messages.room, users.username from messages left outer join users on (messages.userid = users.id) order by messages.id desc'; //<-------- where run all sql code
    db.query(sql, (error, results) => {
      if (error) {
        console.error(error);
      }
      // console.log(results);
      callback(error, results);
    });
  }, // a function which produces all the messages
  create: function (params, callback) {
    let sql = 'insert into messages (txt, room, userid) values ( ?, ?, (select id from users where username = ? limit 1))';
    db.query(sql, params, (error, results) => {
      if (error) {
        callback(error);
      }
      callback(error, results);
    });
  } // a function which can be used to insert a message into the database
};

// module.exports.create('test');
// module.exports.getAll();

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