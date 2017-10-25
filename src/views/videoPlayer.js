var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },
  select: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
