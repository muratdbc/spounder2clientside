var TrackView=Backbone.View.extend({
  tagName: 'li',
  trackTpl: _.template("An example template"),
  events:{
    'swipe': 'onSwipe'
  },
  render: function() {
  this.$el.html( this.todoTpl( this.model.toJSON() ) );
  this.input = this.$('.edit');
  return this;
 }
})