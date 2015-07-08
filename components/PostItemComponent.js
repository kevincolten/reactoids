require('backbone')
var React = require('react');
require('react.backbone');

module.exports = React.createBackboneClass({
  render: function () {
    return (
      <div>
        <h3>
          <a href={ "#posts/" + this.props.model.id}>{this.props.model.get('description')}</a>
        </h3>
      </div>
    );
  }
});
