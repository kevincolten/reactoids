var Backbone = require('backbone');
var UsersController = require('./controllers/UsersController');
Backbone.$ = $;

module.exports = Backbone.Router.extend({
  controllers: {},

  initialize: function() {
    this.controllers.users = new UsersController({router: this});
    Backbone.history.start();
  }
});
