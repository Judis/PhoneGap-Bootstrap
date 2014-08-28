var PageView = require('views/page_view');

module.exports = PageView.extend({
  id        : 'home-view',
  className : '',
  container : '.content',
  template  : require('templates/home'),
  header    : require('templates/headers/home'),

  initialize: function() {}
});