var React = require('react');
var Backbone = require('backbone');
require('react.backbone');

module.exports = React.createBackboneClass({
  render: function() {
    return (
      <div>
        <h1>{this.props.model.get('description')}</h1>
        <p dangerouslySetInnerHTML={{__html: this.props.model.get('content')}}></p>
      </div>
    );
  }
});
