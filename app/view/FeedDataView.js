Ext.define('Fss.view.FeedDataView', {
		extend	: 'Ext.view.View',
		store	: 'Feeds',
		title	: 'Feed View',
		alias	: 'widget.feeddataview',
		itemSelector 	:  'div.feed-list-item',
        trackOver   : true,
        cls         : 'feed-list',
        overItemCls : 'feed-list-item-hover',
    /*
		selModel : {
				mode : 'SINGLE',
				listeners : {
						scope : this,
						selectiononchange : this.onSelectionChange
				}
		},
		*/
				
		initComponent : function() {		
				this.createTpl();
				this.callParent();
				//this.on('render', this.loadStore, this);
		},
		
		loadStore: function() {
			//console.log ('Loading data', this.store);
			//this.store.load();
			//console.log ('Loading data end');
		},
		
		createTpl: function() {
			this.tpl =  Ext.create('Ext.XTemplate',
    			'<tpl for="."><div class="feed-list-item">{title}</div></tpl>', 
			{ 
					compiled : true
			});
		}
		
		
		
});