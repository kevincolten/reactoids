var Backbone = require('backbone');
var React = require('react');
require('backbone-react-component');

module.exports = React.createClass({
  mixins: [Backbone.React.Component.mixin],

  render: function() {
    var divStyle = {
      width: '0px',
      height: '0px',
      borderLeft: '20px solid transparent',
      borderRight: '20px solid transparent',
      borderBottom: '50px solid black',
      left: this.props.model.get('pos_x'),
      top: this.props.model.get('pos_y'),
      position: 'absolute',
      msTransform: 'rotate(' + this.props.model.get('angle') + 'deg)',
      WebkitTransform: 'rotate(' + this.props.model.get('angle') + 'deg)',
      transform: 'rotate(' + this.props.model.get('angle') + 'deg)',
      MozTransform: 'rotate(' + this.props.model.get('angle') + 'deg)'
    };

    return (
      <div style={divStyle}></div>
    );
  }
});
