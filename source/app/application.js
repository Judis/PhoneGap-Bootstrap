Application = {
  initialize: function() {
    var HomeView   = require(ROOT_PATH + 'views/home_view'),
        StaticView = require(ROOT_PATH + 'views/static_view'),
        FormView   = require(ROOT_PATH + 'views/form_view'),
        SliderView = require(ROOT_PATH + 'views/slider_view'),
        Router     = require(ROOT_PATH + 'lib/router');

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