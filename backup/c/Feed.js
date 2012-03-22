Ext.define('Fss.controller.Feed',{
    extend	: 'Ext.app.Controller',

    // object mapping
    refs : [{
        ref : 'feedDataView',         //key also getFeedDataView()
        selector : 'feeddataview'     //mapping to feeddataview as xtype
    }],

    stores : ['Feeds'],

    // register event listener
    init : function() {
        this.control({
            'feeddataview' : {        // ComponentQuery the object to listene to event
                selectionchange : this.onFeedSelect
            }
        });
    },

    onLaunch : function() {
        console.log('on launch');
        var feedStore = this.getFeedsStore();
        feedStore.load({
           callback : this.onFeedLoad,
            scope:this
        });
    },

    onFeedLoad : function() {
      var feeds = this.getFeedDataView();
        feeds.getSelectionModel().select(0);
    },

    onFeedSelect : function(selModel, selection) {
        //do something
    }

});