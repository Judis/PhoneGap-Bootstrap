require(ROOT_PATH+'lib/view_helper')

// Base class for all views
module.exports = Backbone.View.extend({
  container: 'body',
    
  initialize: function(){
    this.render = _.bind(this.render, this)
  },
    
  template: function(){},
  getRenderData: function(){},
    
  render: function(){
    this.$el.html(this.template(this.getRenderData()));
    $(this.container).append(this.$el);
    this.afterRender();
    return this;
  },
    
  afterRender: function(){}    
})