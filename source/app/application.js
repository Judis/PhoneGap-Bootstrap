Application = {
  initialize: function() {
    var HomeView   = require('views/home_view'),
        StaticView = require('views/static_view'),
        FormView   = require('views/form_view'),
        SliderView = require('views/slider_view'),
        Router     = require('lib/router');

    this.views = {
      home   : new HomeView(),
      static : new StaticView(),
      form   : new FormView(),
      slider : new SliderView()
    };

    this.router = new Router();
  }
};

module.exports = Application;