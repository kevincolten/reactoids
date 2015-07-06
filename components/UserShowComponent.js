var React = require('react');
var Backbone = require('backbone');
require('react.backbone');

module.exports = React.createBackboneClass({
  mixins: [
     React.BackboneMixin('model', 'change'),
  ],

  getInitialState: function() {
    return {
      liked: false
    }
  },

  handleLike: function(e) {
    e.preventDefault();
    var currentLikes = this.props.model.get('likes_count');
    this.props.model.save({ likes_count: currentLikes + 1 });
  },

  render: function() {
    var user = this.props.model;
    var username = user.get('username');
    var likesCount = user.get('likes_count');

    return (
      <div className="user-container">
        <h1>{username}s Profile</h1>
        <p>{likesCount} likes</p>
        <button className="like-button" onClick={this.handleLike}>
          Like
        </button>
      </div>
    );
  }
});