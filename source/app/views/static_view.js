var PageView = require('./page_view');

module.exports = PageView.extend({
  id        : 'static-view',
  className : '',
  container : '.content',
  template  : require('../templates/static'),
  header    : require('../templates/headers/static'),

  initialize: function() {}
});