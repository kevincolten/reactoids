'use strict';

var Backbone = require('backbone');
var UsersController = require('./controllers/UsersController');

var Application = Backbone.Router.extend({
  controllers: {},

  initialize: function() {
    this.controllers.users = new UsersController({router: this});
    Backbone.history.start();
  }
});

window.app = new Application();
