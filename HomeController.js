module.exports = {
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
};
