'use strict';

var AsteroidModel = require('./models/AsteroidModel');
var ShipModel = require('./models/ShipModel');
var AsteroidComponent = require('./components/AsteroidComponent');
var ShipComponent = require('./components/ShipComponent');
var Backbone = require('backbone');
var React = require('react');
var _ = require('underscore');
var $ = require('jquery');
var key = require('keymaster');

var Application = Backbone.Router.extend({
  initialize: function()
  {
    var asteroids = new Backbone.Collection();

    _(5).times(function (idx) {
      asteroids.add(new AsteroidModel({ id: idx }));
    });

    asteroids.each(function (asteroid) {
      $('body').prepend('<div id="asteroid' + asteroid.id + '">');
      React.render(<AsteroidComponent model={asteroid} />, $('#asteroid' + asteroid.id)[0]);
    });

    var ship = new ShipModel();
    $('body').prepend('<div id="ship">');
    React.render(<ShipComponent model={ship} />, $('#ship')[0]);

    var angleSpeed = 0.03;

    setInterval (function () {
      key("up", function () {
        ship.accelerate();
      });

      key("right", function () {
        ship.set('angle', ship.get('angle') + angleSpeed);
      });

      key("left", function () {
        ship.set('angle', ship.get('angle') - angleSpeed);
      });

      ship.coast();

      if (ship.offScreen()) {
        ship.fixOffScreen();
      }

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
