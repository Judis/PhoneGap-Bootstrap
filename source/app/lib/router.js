var application = require('application');

module.exports = Backbone.Router.extend({
  routes: {
    ''            : 'home',
    'home'        : 'home',
    'static-page' : 'static',
    'form-page'   : 'form',
    'slider-page' : 'slider'
  },
    
  home: function() {
    application.views.home.render();
  },

  static: function() {
    application.views.static.render();
  },

  form: function() {
    application.views.form.render();
  },

  slider: function() {
    application.views.slider.render();
  }
})
