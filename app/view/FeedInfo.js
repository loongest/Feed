Ext.define('Fss.view.FeedInfo', {
    extend : 'Ext.tab.Panel',
    alias  : 'widget.feedinfo',
    maxTabWidth: 230,
    border: false,

    initComponent: function() {
        this.tabBar = {
            border : true
        };
        this.callParent();
    }
});
