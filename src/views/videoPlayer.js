var VideoPlayerView = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, 'select', this.selectVideo);
  },
  select: function(selection) {
    this.model = selection;
    this.render();
  },

  render: function() {
    if (this.model) {
      this.$el.html(this.template());
    } else {
      this.$el.html('<div class="loading">Pkease wait...</div>');
    }
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
