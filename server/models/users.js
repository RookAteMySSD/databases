var db = require('../db');

module.exports = {
  getAll: function (callback) {
    let sql = 'SELECT * FROM users';
    db.query(sql, (error, results) => {
      if (error) {
        console.error(error);
      }
      callback(err, results);
    });
  },
  create: function (params, callback) {
    let sql = 'insert into users (user) values (?)';
    db.query(sql, params, (error, results) => {
      if (error) {
        console.error(error);
      }
      callback(err, results);
    });
  }
};

// module.exports.create('name');
// module.exports.getAll();