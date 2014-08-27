var application = require('application');

document.addEventListener(
  'deviceready',
  function() {
    StatusBar.overlaysWebView(false);

    application.initialize();
    Backbone.history.start();
  },
  false
);