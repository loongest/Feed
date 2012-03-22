Ext.define('Fss.view.Viewport', {
	extend		: 'Ext.container.Viewport',
	layout		: 'fit',
	
	initComponent : function() {
		Ext.apply(this, {
			layout 	: 'border',
			padding : 5,
			items   : [ this.createFeedPanel(),  this.createFeedInfo() ]			
		});
		this.callParent();
	},
	

	createFeedPanel : function() {
		this.feedPanel = Ext.create('Fss.view.FeedPanel',{
			autoHeight  : true,
			width		: 300,
			region 		: 'west',
			collapsible	: true			
		});
		return this.feedPanel;
	},


	createFeedInfo : function() {
		this.feedInfoPanel = Ext.create('Fss.view.FeedInfo', {
			region   	: 'center',
			title    	: 'xzcxzc',
			html     	: 'Hello'

		});
		return this.feedInfoPanel;
	}

});


/*
initComponent: function() {
		console.log('starting');
		this.items = {
			dockedItems : [{
				dock	: 'top',
				xtype	: 'toolbar',
				height	: 80,
				items	: [
					{
						xtype	: 'panel',
						html	: 'I\'m toolbar top',
						flex	: 1
					}
				]
			}],

			layout 	: {
				type	: 'hbox',
				align	: 'stretch'
			},

			items	: [
			    {
			    	xtype	: 'panel',
			    	region	: 'west',
					width	: 250,
					id		: 'right-region',
					collapsible: true,
					animCollapse: true,
					floatable: false,
					split: true,
					minWidth: 175,

					layout	: {
						type	: 'vbox',
						align	: 'stretch'
					},
					items	: [
					     {
							xtype	: 'memberlist',
							flex	: 1,
							collapsible : true,

							feeds: [{
							    title: 'Sencha Blog',
							    url: 'http://feeds.feedburner.com/extblog'
							}, {
							    title: 'Sencha Forums',
							    url: 'http://sencha.com/forum/external.php?type=RSS2'
							}, {
							    title: 'Ajaxian',
							    url: 'http://feeds.feedburner.com/ajaxian'
							}],


					     },
					     {
					    	 xtype  : 'panel',
					    	 html	: 'Ad',
					    	 height	: 250
					     }
					]
			    }
			    ,
			    {
			    	xtype	: 'container',
			    	flex	: 1,
			    	layout	: {
			    		type	: 'vbox',
			    		align	: 'stretch'
			    	},
			    	items	: [
			    	    {
				    		type	: 'panel',
				    		html	: 'A zone',
				    		height	: 300
			    		},
			    		{
			    			type	: 'panel',
			    			html	: 'B zone',
			    			flex	: 1
			    		}
			    	]
			    }
			]
		};
		this.callParent();
	}
*/