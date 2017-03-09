var express = require('express');
var twit = require('twit');

var Router = new express.Router();

var T = new twit({
  consumer_key:         process.env.CUS_KEY,
  consumer_secret:      process.env.CUS_SEC,
  access_token:         process.env.ACC_TOK,
  access_token_secret:  process.env.ACC_SEC,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
});

Router.use(function (req, res, next) {
  console.log("Using the express router.");
  next();
});

Router.route('/followers/:sname')
  .get(function (req, res) {
    T.get('/followers/list', {screen_name: req.params.sname}, function (err, data, response) {
      res.json(data);
    });
  });

Router.route('/following/:sname')
  .get(function (req, res) {
    T.get('/friends/list', {screen_name: req.params.sname}, function (err, data, response) {
      res.json(data);
    });
  });

module.exports = Router;
