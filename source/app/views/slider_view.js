var PageView = require(ROOT_PATH + 'views/page_view');

module.exports = PageView.extend({
  id        : 'slider-view',
  className : '',
  container : '.content',
  template  : require(ROOT_PATH + 'templates/slider'),
  header    : require(ROOT_PATH + 'templates/headers/slider'),

  initialize: function() {}
});