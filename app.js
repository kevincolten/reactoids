'use strict';

var AsteroidModel = require('./models/AsteroidModel');
var AsteroidsComponent = require('./components/AsteroidsComponent');
var Backbone = require('backbone');
var React = require('react');
var _ = require('underscore');

var Application = Backbone.Router.extend({
  initialize: function()
  {
    var asteroids = new Backbone.Collection();

    _(5).times(function () {
      asteroids.add(new AsteroidModel());
    });

    var AsteroidsView = React.createFactory(AsteroidsComponent);
    React.render(AsteroidsView({ collection: asteroids }), document.getElementById('content'));

    setInterval (function () {
      asteroids.each(function (asteroid) {
        asteroid.set({
          pos_x: asteroid.get('pos_x') + asteroid.get('vel_x'),
          pos_y: asteroid.get('pos_y') + asteroid.get('vel_y'),
        });
        if (asteroid.offScreen()) {
          asteroid.fixOffScreen();
        }
      });
    }, 10 );

  }
});

window.app = new Application();
