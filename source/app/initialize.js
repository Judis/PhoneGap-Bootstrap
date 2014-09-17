var application = require('application');

document.addEventListener(
  'deviceready',
  function() {
    if (device.platform == 'iOS') {
      StatusBar.styleDefault();
      $('body').addClass('ios');
    }
    application.initialize();
    Backbone.history.start();
  },
  false
);