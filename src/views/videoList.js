var VideoListView = Backbone.View.extend({
  initialize: function() {
    //event handler
    this.on('sync', this.render);
  },

  render: function() {
    new VideoListEntry({});
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
