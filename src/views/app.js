var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    new VideoPlayerView({model: Video });
    new VideoListView({model: Video }).render();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')
});
