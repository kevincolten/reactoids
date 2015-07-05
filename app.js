'use strict';

var $ = require('jquery');
var Backbone = require('backbone');
var Router = require('./router.js')

$(document).ready(function(){
    new Router();
    Backbone.history.start({pushState: true})
})
