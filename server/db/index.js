var mysql = require('mysql2');

// Create a database connection and export it from this file.
// Confirm that the credentials supplied for the connection are correct.
// On Campus at pairing stations you'll use
// user: 'student', password: 'student'
// On your personal computer supply the correct credentials for your mySQL account -- likely
// user: 'root', password: ''
// OR
// user: 'root', password: 'some_password_you_created_at_install'


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

// connection.getAll( (err) => {
//   if (err) {
//     return console.error('error: ' + err.message);
//   } else {
//     let sql = 'SELECT * FROM messages';
//     connection.query(sql, (error, results, fields) => {
//       if (error) {
//         return console.error(error.message);
//       }
//       console.log('results', results);
//     });

//     connection.end();
//   }
// });








// connection.end(function(err) {
//   if (err) {
//     return console.log('error:' + err.message);
//   }
//   console.log('Close the database connection.');
// });
exports.connection = connection;
// console.log(module.exports);

// var pool = mysql.createPool({
//   connectionLimit: 5,
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'todoapp'
// });

// pool.getConnection(function(err, connection) {
//   // execute query
//   // ...
//connnection.release();
// });

// pool.end(function(err) {
//   if (err) {
//     return console.log(err.message);
//   }
//   // close all connections
// });