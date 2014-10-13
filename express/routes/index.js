var express = require('express');
var router = express.Router();
var models  = require('../models');

router.get('/', function(req, res) {
  models.User.findAll({
    include: [ models.Task ]
  }).success(function(users) {
    res.render('index', {
      title: 'Express',
      users: users
    });
  });
});

module.exports = router;
