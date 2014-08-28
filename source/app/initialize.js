var application = require('application');

document.addEventListener(
  'deviceready',
  function() {
    // Fix for iOS 7 status bar bug
    // For use it install plugin (phonegap plugin add org.apache.cordova.statusbar)
    // StatusBar.overlaysWebView(false);

    application.initialize();
    Backbone.history.start();
  },
  false
);