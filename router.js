var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
require('backbone.layoutmanager');
require('./config.js');
Backbone.HomeView = require('./views/HomeView.js');

module.exports = Backbone.Router.extend({
    routes: {
        '': 'homeController',
        '/': 'homeController'
    },

    homeController: function()
    {
        var main = new Backbone.Layout({
            template: _.template('<section id="content"></section>'),

            views: {
                "#content": new Backbone.HomeView()
            }
        });
        $('body').html(main.$el);
        main.render();
    }
});
