var PageView = require(ROOT_PATH + 'views/page_view');

module.exports = PageView.extend({
  id        : 'static-view',
  className : '',
  container : '.content',
  template  : require(ROOT_PATH + 'templates/static'),
  header    : require(ROOT_PATH + 'templates/headers/static'),

  initialize: function() {}
});