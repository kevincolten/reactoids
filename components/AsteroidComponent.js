var Backbone = require('backbone');
var React = require('react');
require('backbone-react-component');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    var divStyle = {
      backgroundColor: 'black',
      left: this.props.model.get('pos_x'),
      top: this.props.model.get('pos_y'),
      position: 'absolute',
      height: this.props.model.get('radius') * 2 + 'px',
      width: this.props.model.get('radius') * 2 + 'px',
      borderRadius: this.props.model.get('radius') + 'px'
    };

    return (
      <div style={divStyle}></div>
    );
  }
});
