var View = require(ROOT_PATH + 'views/view');

module.exports = View.extend({
  header_container: $('.bar'),

  render: function(){
    this.render_header();
    this.$el.html(this.template(this.getRenderData()));
    $(this.container).html(this.$el);
    this.afterRender();
    return this;
  },

  render_header: function() {
    if (this.header) {
      this.header_container.html(this.header());
    }
  }
});