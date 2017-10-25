var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },
 

  render: function() {
    // new VideoPlayerView({model: Video, collection: this.videos });
    // new VideoListView({$el: $('.list'), model: Video, collection: this.videos }).render();
    this.$el.html(this.template());
    new SearchView({el: '.search'}).render();
    new VideoPlayerView({el: '.player', model: this.videos.at(0)}).render();
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')
});
