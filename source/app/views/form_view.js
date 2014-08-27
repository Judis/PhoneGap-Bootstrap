var PageView = require('./page_view');

module.exports = PageView.extend({
  id        : 'form-view',
  className : '',
  container : '.content',
  template  : require('../templates/form'),
  header    : require('../templates/headers/form'),

  initialize: function() {}
});