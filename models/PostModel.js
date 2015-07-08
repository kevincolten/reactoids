var Backbone = require('backbone');
var marked = require('marked');

module.exports = Backbone.Model.extend({
  urlRoot: 'https://api.github.com/gists/',
  idAttribute: 'id',

  parse: function(model)
  {
    model.description = model.description.replace("@post ", "");
    if (model.files) {
      model.content = marked(model.files[Object.keys(model.files)[0]].content, { sanitize: true });
    }
    return model;
  }
});
