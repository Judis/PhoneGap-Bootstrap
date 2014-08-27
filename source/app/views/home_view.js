var PageView = require(ROOT_PATH + 'views/page_view');

module.exports = PageView.extend({
  id        : 'home-view',
  className : '',
  container : '.content',
  template  : require(ROOT_PATH + 'templates/home'),
  header    : require(ROOT_PATH + 'templates/headers/home'),

  initialize: function() {}
});