'use strict';

var AsteroidModel = require('./models/AsteroidModel');
var ShipModel = require('./models/ShipModel');
var AsteroidComponent = require('./components/AsteroidComponent');
var ShipComponent = require('./components/ShipComponent');
var Backbone = require('backbone');
var React = require('react');
var _ = require('underscore');
var $ = require('jquery');
var keypress = require('keypress.js');

var Application = Backbone.Router.extend({
  initialize: function()
  {
    var asteroids = new Backbone.Collection();

    _(5).times(function (idx) {
      asteroids.add(new AsteroidModel({ id: idx }));
    });

    asteroids.each(function (asteroid) {
      var AsteroidView = React.createFactory(AsteroidComponent);
      $('body').prepend('<div id="asteroid' + asteroid.id + '">');
      React.render(AsteroidView({ model: asteroid }), $('#asteroid' + asteroid.id)[0]);
    });

    var ship = new ShipModel();
    var ShipView = React.createFactory(ShipComponent);
    $('body').prepend('<div id="ship">');
    React.render(ShipView({ model: ship }), $('#ship')[0]);

    var listener = new keypress.keypress.Listener();

    listener.simple_combo('up', function() {
      ship.power();
    });

    listener.simple_combo('left', function() {
      ship.set('angle', ship.get('angle') - 45);
    });

    listener.simple_combo('right', function() {
      ship.set('angle', ship.get('angle') + 45);
    });

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
    }, 10);

  }
});

window.app = new Application();
