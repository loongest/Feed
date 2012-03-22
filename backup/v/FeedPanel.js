Ext.define('Fss.view.FeedPanel', {
	extend	 : 'Ext.panel.Panel',
	requires : ['Fss.view.FeedDataView'],
	alias	 : 'widget.feedpanel',
	layout	 : 'fit',
	title	 : 'Feed',
	animCollapse 	: true,
	/*
	initComponent : function() {
			 this.createMenu();
			 this.addEvents('feedremove', 'feedselect');
			 this.callParent(arguments);
	},
	*/
	dockedItems : [{
					xtype : 'toolbar',
					dock  : 'top',
					defaults : {
										xtype : 'button',
										buttonAlign : 'center',
										iconAlign     : 'top',
										scale            : 'small'
									},
						items : [
								{
									text  : 'Add Feed',
									iconCls : 'feed-add',
									handler : this.onAddFeedClick
								},{
									text  : 'Remove Feed',
									itemId : 'remove',
									scope  : this,
									iconCls : 'feed-remove',
									handler : this.onRemoveFeedClick
								}
						]
	}],
	
	items  : [  	             
					{	xtype : 'feeddataview'  },
					{	xtype : 'button', text : 'click me'  },
					{	xtype : 'panel', title : 'Hello', html : 'asd' }					
	]
	/*
	createMenu : function() {
		this.menu = Ext.create('widget.menu', {
			items : [
							{
								scope : this,
								handler : this.onLoadClick,
								text : 'Load feed',
								iconCls : 'feed-load'
							},
							this.removeAction, '-', this.addAction
						],
			    listeners : {
					hide : function(c) {
						c.activeFeed = null;
					}
				}
		});
	},
	*/
	/*
	onAddFeedClick : function() {
		var win = Ext.create('widget.feedwindow', {
				listeners : {
					scope : this,
					feedvalid : this.onFeedValid
				}
		});
	},

	onRemoveFeedClick : function() {
		var active = this.menu.activeFeed || this.getSelectedItem();
		this.animateNode(this.view.getNode(active),1,0, {
				scope : this,
				afteranimate : function() {
					this.view.store.remove(active);
				}
		});
		this.fireEvent('feedremove', this, active.get('title'), active.get('url'));
	},

	onFeedValid : function(win, title, url) {
		var view = this.view,
		      store = view.store,
			  rec;
		rec = store.add({
			url : url,
			title : title
		})[0];
		this.animateNode(view.getNode(rec),0,1);
	},

	animateNode: function(el, start, end, listeners){
        Ext.create('Ext.fx.Anim', {
            target: Ext.get(el),
            duration: 500,
            from: {
                opacity: start
            },
            to: {
                opacity: end
            },
            listeners: listeners
         });
    },

    // Inherit docs
    onDestroy: function(){
        this.callParent(arguments);
        this.menu.destroy();
    }
	*/
});
