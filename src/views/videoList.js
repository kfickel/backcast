var VideoListView = Backbone.View.extend({
  // events: {
  //   'sync': 'render',
  // },
  // triggerRender: function(e) {
  //   console.log('here');
  //   this.render();
  // },
  // el: '<list></list>',
  
  initialize: function() {
    //event handler
    // this.on('sync', function() {
    //   console.log('worked');
    // });
    this.listenTo(this.collection, 'sync', this.render);
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //this.$el.empty();
    var element = this.$el;
    
    this.collection.each(this.renderVideo, this);
    return this;
  },
  renderVideo: function(video) {
    var newVideo = new VideoListEntryView({model: video}).render();
      
    this.$('.video-list').append(newVideo.el);
  },
  template: templateURL('src/templates/videoList.html')

});
