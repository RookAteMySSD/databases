var models = require('../models');

module.exports = {
  get: function (req, res) {
    // invoke models getall
    models.messages.getAll( (err, results) => {
      if (err) {
        console.error('Unable to retrieve messages from database: ', err);
        res.sentStatus(500);
      } else {
        res.json(results);
      }
    });


    // send data
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    var params = [req.body.message, req.body.roomname, req.body.username];
    models.messages.create(params, (err, results) => {
      if (err) {
        console.error('Unable to post messages to database: ', err);
      } else {
        res.sendStatus(201);
      }
    });

  } // a function which handles posting a message to the database
};
