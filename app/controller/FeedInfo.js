Ext.define('Fss.controller.FeedInfo',{
    extend	: 'Ext.app.Controller',
    views   : ['FeedInfo'],

    /*
     *
     */
    refs : [{
        ref : 'feedInfo',         //key also getFeedDataView()
        selector : 'feedinfo'     //mapping to feeddataview as xtype
    }],

    stores : ['Feeds'],

    // register event listener here
    //
    init : function() {
        this.control({
            'feeddataview' : {        // ComponentQuery with xtype selector
                selectionchange : this.onSelectionChange
            }
        });
    },

    addFeed : function(title, url) {
        var active = this.getFeedInfo().items.first();
        if(!active) {
           console.log(this.getFeedInfo());
           active = this.getFeedInfo().add({
                xtype : 'feeddetail',
                title : title,
                url   : url,
                closable : false
            });
        }else {
            active.loadFeed(url);
            active.tab.setText(title);
        }
        this.getFeedInfo().setActiveTab(active);
    }


});