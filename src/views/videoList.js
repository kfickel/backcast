var VideoListView = Backbone.View.extend({
  initialize: function() {
    //event handler
    this.on('sync', this.render, this);
  },

  render: function() {
    this.$el.empty();
    this.collection.each(function(Videos) {
      var newVideo = new VideoListEntryView({model: Video}).render();
      $('.list').append(newVideo.el);
    });
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
