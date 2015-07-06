require('backbone')
var React = require('react');
require('react.backbone');

var UserBlockViewComponent = React.createBackboneClass({
  render: function () {
    var user = this.props.user;
    var username = user.get('username');
    var avatar = user.get('avatar').url;
    var link = '/users/' + user.get('id');

    return (
      <div className="user-block">
        <a href={link}>
          <h2>{username}</h2>
          <img src={avatar} alt={username} />
        </a>
      </div>
    );
  }
});

module.exports = React.createBackboneClass({
  mixins: [
    React.BackboneMixin('users', 'change')
  ],

  render: function() {
    var userBlocks = this.props.users.map(function(user) {
      return <UserBlockViewComponent user={user} />
    });

    return (
      <div className="users-container">
        <h1>Users</h1>
        {userBlocks}
      </div>
    );
  }
});