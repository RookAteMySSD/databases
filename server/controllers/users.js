var models = require('../models');

module.exports = {
  get: function (req, res) {
    models.users.getAll(function(error, results) {
      if (error) {
        console.error('Unable to retrieve messages from database: ', error);
        res.sendStatus(500);
      }
      res.JSON(results);
    });
  },
  post: function (req, res) {
    var params = [req.body.username];
    models.users.create(params, function(error, results) {
      if (error) {
        console.error('Unable to post messages to database: ', error);
        res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  }
};
