var Backbone = require('backbone');
var BaseView = require('../../base-view');
var MainComponent = require('./component');

var MainView = BaseView.extend({
  component: function () {
    return new MainComponent({
      router: this.options.router
    });
  },

  pageRender: function (view) {
    this.$('#main-container').html(view.render().$el);
  }
});

module.exports = MainView;