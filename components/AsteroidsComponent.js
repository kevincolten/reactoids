var React = require('react');
var Backbone = require('backbone');
require('react.backbone');
var AsteroidComponent = require('./AsteroidComponent');

module.exports = React.createBackboneClass({

  render: function() {
    var asteroids = this.props.collection.map(function (asteroid) {
      return <AsteroidComponent model={asteroid} />
    });

    return (
      <div>
        {asteroids}
      </div>
    );
  }
});
