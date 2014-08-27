var PageView = require(ROOT_PATH + 'views/page_view');

module.exports = PageView.extend({
  id        : 'form-view',
  className : '',
  container : '.content',
  template  : require(ROOT_PATH + 'templates/form'),
  header    : require(ROOT_PATH + 'templates/headers/form'),

  initialize: function() {}
});