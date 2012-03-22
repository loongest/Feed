Ext.define('Fss.store.Feeds', {
    extend	 : 'Ext.data.Store',
	requires : 'Fss.model.Feed',
	model	 : 'Fss.model.Feed',

    proxy	  : {
        type : 'memory',
        data : [{
            title: 'Sencha Blog',
            url: 'http://feeds.feedburner.com/extblog'
        }, {
            title: 'Sencha Forums',
            url: 'http://sencha.com/forum/external.php?type=RSS2'
        }, {
            title: 'Ajaxian',
            url: 'http://feeds.feedburner.com/ajaxian'
        }]
    },

    listeners : {
        load : function(store){
            console.log('station is loaded');
            store.data.each(function(rec){
                console.log(rec);
            });
        }
    }
});