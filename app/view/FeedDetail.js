Ext.define('Fss.view.FeedDetail',{
    extend : 'Ext.panel.Panel',
    alias  : 'widget.feeddetail',
    border : false,

    initComponent : function() {
        //this.display = Ext.create('widget.feedpost',{});

        Ext.apply(this, {
            layout : 'border',
            items : [this.createGrid(), this.createSouth(), this.createEast()]
        });
        this.relayEvents(this.display, ['opentab']);
        this.relayEvent(this.grid, ['rowdblclick']);
        this.callParent(arguments);
    },

    loadFeed : function(url){
        this.grid.loadFeed(url);
    },

    createGrid : function(){
        this.grid = Ext.create('widget.feedgrid', {
            region : 'center',
            dockedItems : [this, createTopToolbar()],
            flex : 2,
            minHeight : 200,
            minWidth: 150,
            listeners: {
                scope : this,
                select : this.onSelect
            }
        });
        this.loadFeed(this.url);
        return this.grid;
    },

    createSouth : function() {
        this.south = Ext.create('Ext.container.Container',{
            layout : 'fit',
            region : 'south',
            split  : true,
            flex   : 2,
            minHeight: 150,
            items : this.display
        });
        return this.south;
    },

    createEast: function(){
        this.east =  Ext.create('Ext.panel.Panel', {
            layout: 'fit',
            region: 'east',
            flex: 1,
            split: true,
            hidden: true,
            minWidth: 150,
            border: false
        });
        return this.east;
    }

});
