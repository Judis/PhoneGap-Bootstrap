var PageView = require('views/page_view');

module.exports = PageView.extend({
  id        : 'slider-view',
  className : '',
  container : '.content',
  template  : require('templates/slider'),
  header    : require('templates/headers/slider'),

  initialize: function() {}
});