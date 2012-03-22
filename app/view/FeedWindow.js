Ext.define('Fss.view.FeedWindow',{
    extend : 'Ext.window.Window',
    alias : 'widget.feedwindow',
    plain : true,
    width: 500,
    title: 'Add Feed',
    iconCls: 'feed',
    layout: 'fit',

    initComponent: function(){
        this.addEvents('feedvalid');
        this.callParent();
    },

    items : [
        { xtype : 'feedform'}
    ],
    buttons: [{
        xtype: 'button',
        text: 'Add Feed',
        scope: this,
        itemId: 'ok',
        action : 'onOkClick'
    }, {
        xtype: 'button',
        text: 'Cancel',
        scope: this,
        itemId : 'cancel',
        action : 'onCancelClick'
    }]


});
