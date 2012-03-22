Ext.define('Fss.controller.Feed',{
    extend	: 'Ext.app.Controller',
    views   : ['FeedForm','FeedWindow'],
    // object mapping
    /*
    *
     */
    refs : [{
            ref : 'feedDataView',         //key also getFeedDataView()
            selector : 'feeddataview'     //mapping to feeddataview as xtype
        },{
            ref : 'feedPanel',
            selector : 'feedpanel'
        },{
            ref : 'feedWindow',
            selector : 'feedwindow'
        },{
            ref : 'feedForm',
            selector : 'feedform'
        },{
            ref : 'feedInfo',
            selector : 'feedinfo'
        }
    ],

    stores : ['Feeds'],

    // register event listener here
    //
    init : function() {
        this.control({
            'feeddataview' : {        // ComponentQuery with xtype selector
                selectionchange : this.onSelectionChange
            },
            'button#remove' : {            //  ComponentQuery with #id selector
                click : this.onRemoveFeedClick
            },
            'button#add' : {
                click : this.onAddFeedClick
            },
            'button#ok' : {
                click : this.onOkClick
            },
            'button#cancel' : {
                click : this.onCancelClick
            }
        });
    },

    onLaunch : function() {
        console.log("[controller] onLaunch function..");
        var feedStore = this.getFeedsStore();

        feedStore.load({
           callback : this.onFeedLoad,
            scope   : this
        });
    },

    onFeedLoad : function() {
       var dataView = this.getFeedDataView();
       dataView.getSelectionModel().select(0);
    },


    // involved in 3 panel interaction
    onSelectionChange : function(){
        var selected = this.getSelectedItem();
        this.getRemoveFeedButton().setDisabled(!selected);
        this.loadFeed(selected);
    },

    onFeedSelect : function( title, url) {
       this.getController('Fss.controller.FeedInfo').addFeed(title, url);
    },


    getRemoveFeedButton : function(){
        return this.getFeedPanel().getDockedComponent('toolbarMenu').getComponent('remove');
    },

    loadFeed : function(rec) {
        if(rec) {
            this.onFeedSelect(rec.get('title'), rec.get('url'));
        }
    },

    // NOTE ** This is click event, so function(event, target) is available for used
    // event is click , target is what u had selected.
    onRemoveFeedClick : function() {
        var active = this.getSelectedItem();
        var view = this.getFeedDataView();
        this.animateNode(view.getNode(active),1,0, {
           scope    : this,
           afteranimate : function() {
               view.store.remove(active);
           }
        });
    },

    animateNode : function(el, start, end, listeners) {
        Ext.create('Ext.fx.Anim', {
           target   : Ext.get(el),
           duration : 500,
           from     : {
               opacity : start
           },
            to      : {
               opacity : end
            },
            listeners : listeners
        });
    },

    getSelectedItem : function() {
        return this.getFeedDataView().getSelectionModel().getSelection()[0] || false;
    },

    onAddFeedClick : function() {
       var win = Ext.create('Fss.view.FeedWindow', {
                listeners : {
                    scope : this,
                    feedvalid : this.onFeedValid
                }
        });
        win.show();
    },

    onFeedValid: function(win, title, url){
        var view = this.view,
            store = view.store,
            rec;

        rec = store.add({
            url: url,
            title: title
        })[0];
        this.animateNode(view.getNode(rec), 0, 1);
    },


    onOkClick : function(){
        var form = this.getFeedForm();
        var url = form.getComponent('feed').getValue();
        form.setLoading({
           msg : 'Validating feed...'
        });
        Ext.Ajax.request({
            url : 'feed-proxy.php',
            params : {
                feed : url
            },
            success : this.validateFeed,
            failure : this.markInvalid,
            scope : this
        });

        console.log(url);
    },

    onCancelClick : function() {
        console.log('on cancel click');
    },

    validateFeed : function() {
        this.getFeedForm().setLoading(false);
        var dq = Ext.DomQuery,
            url = this.getFeedForm().getComponent('feed').getValue(),
            xml,
            channel,
            title;

        try {

            xml = response.responseXML;
            channel = xml.getElementsByTagName('channel')[0];
            if (channel) {
                title = dq.selectValue('title', channel, url);
                this.fireEvent('feedvalid', this, title, url);
                this.destroy();
                return;
            }
        } catch(e) {
            console.log(e);
        }
        this.markInvalid();
    },

    markInvalid : function() {
        this.getFeedForm().setLoading(false);
        this.getFeedForm().getComponent('feed').markInvalid('The URL specified is not valid RSS2 feed');
    },


});