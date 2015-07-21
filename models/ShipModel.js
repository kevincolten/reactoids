var MovingObjectModel = require('./MovingObjectModel');
var _ = require('underscore')

module.exports = MovingObjectModel.extend({

    defaults: {
        pos_x: window.innerWidth / 2,
        pos_y: window.innerHeight / 2,
        angle: 0,
        vel_x: 0,
        vel_y: 0
    },

    initialize: function()
    {
        this.on({
            'change:vel_y': this.turnY,
            'change:vel_x': this.turnX
        });
    },

    power: function()
    {
        this.set({
            vel_x: this.get('vel_x') + Math.sin(this.get('angle')),
            vel_y: this.get('vel_y') + (-1 * Math.cos(this.get('angle')))
        });

        console.log('vel_x: ' + this.get('vel_x') + ' vel_y: ' + this.get('vel_y') + ' angle: ' + this.get('angle'));
    },

    turnY: function()
    {
        this.set('pos_y', this.get('pos_y') + this.get('vel_y'));
    },

    turnX: function()
    {
        this.set('pos_x', this.get('pos_x') + this.get('vel_x'));
    }
});