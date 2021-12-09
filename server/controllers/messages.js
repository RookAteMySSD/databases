var models = require('../models');

module.exports = {
  get: function (req, res) {
    // invoke models getall
    models.messages.getAll();
    // send data
  }, // a function which handles a get request for all messages
  post: function (req, res) {
    models.message.create(req);
  } // a function which handles posting a message to the database
};
