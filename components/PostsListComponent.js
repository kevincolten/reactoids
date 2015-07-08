require('backbone')
var React = require('react');
require('react.backbone');
var PostItemComponent = require('./PostItemComponent');

module.exports = React.createBackboneClass({
  mixins: [],

  render: function() {
    var postItems = this.props.collection.map(function(postItem) {
      return <PostItemComponent model={postItem} />
    });

    return (
      <div>
        <h1>Posts</h1>
        {postItems}
      </div>
    );
  }
});
