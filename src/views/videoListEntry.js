var VideoListEntryView = Backbone.View.extend({
  events: {
    'click': 'select',
  },

  select: function(e) {
    this.model.select();
  },
  
  // initialize: function() {
  //   // this.$('.video-list-entry-title').on('click', this.model.select, this.model);
  //   // console.log('model ', this.model);
  // },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
