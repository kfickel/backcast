var VideoListEntryView = Backbone.View.extend({
  events: {
    'click .video-list-entry-title': 'select',
  },

  select: function(e) {
    this.model.select();
  },
  
  initialize: function() {
    // this.$('.video-list-entry-title').on('click', this.model.select, this.model);
    // console.log('model ', this.model);
    this.on('change', this.render, this);
  },

  render: function() {
    // this.collection.each(function(Videos) {
    this.$el.html(this.template(this.model.attributes));
    return this;
    // });
  },

  template: templateURL('src/templates/videoListEntry.html')

});
