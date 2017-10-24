var VideoListEntryView = Backbone.View.extend({
  initialize: function() {
    $('video-list-entry-title').on('click', this.model.select, this);
    console.log(this.model);
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
