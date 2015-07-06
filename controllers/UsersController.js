var Backbone = require('backbone');
var React = require('react');
require('backbone.controller');
var UserShowComponent = require('../components/UserShowComponent');
var UserModel = require('../models/UserModel');


module.exports = Backbone.Controller.extend({
  routes: {
    'users': 'index',
    'users/:id': 'show'
  },

  initialize: function() {
    // do some init stuff
  },

  index: function() {

  },

  show: function(id) {
    var user = new UserModel({ username: 'mistakevin', likes_count: 0 })
    var UserShowView = React.createFactory(UserShowComponent);
    React.render(UserShowView({ model: user }), document.getElementById('content'));
  }
});