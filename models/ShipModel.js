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

    accelerate: function()
    {
        this.set({
            vel_x: this.get('vel_x') + (Math.sin((Math.PI / 180) * this.get('angle')) * 0.001),
            vel_y: this.get('vel_y') + ((-1 * Math.cos((Math.PI / 180) * this.get('angle'))) * 0.001)
        });
    },

    coast: function()
    {
        this.set('pos_y', this.get('pos_y') + this.get('vel_y'));
        this.set('pos_x', this.get('pos_x') + this.get('vel_x'));
    }
});