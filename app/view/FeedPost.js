Ext.define('Fss.view.FeedPost',{
    extend : 'Ext.panel.Panel',
    alias  : 'widget.feedpost',
    cls    : 'preview',
    autoScroll : true,
    border: true,

    initComponent: function(){
        this.createTpl();
        Ext.apply(this,
            {
                dockedItems: [ this.createToolbar() ],
                tpl : Ext.create('Ext.XTemplate',
                    '<div class="post-data">',
                    '<span class="post-date">{pubDate:this.formateDate}</span>',
                    '<h3 class="post-title">{title}</h3>',
                    '<h4 class="post-author">by {author:this.defaultValue}</h4>',
                    '<div>',
                    '<div class="post-body">{content:this.getBody}</div>',
                    {
                        getBody : function(value, all) {
                            return Ext.util.Format.stripScripts(value);
                        },
                        defaultValue : function(v){
                            return v ? v : 'Unknown';
                        },
                        formatDate : function(value){
                            if(!value){
                                return '';
                            }
                            return Ext.Date.format(value, 'M j, Y, g:i a');
                        }
                    }
                )
            }
        );
        this.callParent(arguments);
    },

    createToolbar : function() {
        var items = [],
            config = [];
        console.log('in tab');
        if(!this.inTab){
            console.log(this.inTab);
            items.push({
               scope : this,
                handler : this.openTab,
                text : 'View in new tab',
                iconCls : 'tab-view'
            },'-');
        }else{
            console.log(this.inTab);
             config.cls = 'x-docked-noborder-top';
        }
        items.push({
            scope : this,
            handler : this.goToPost,
            text : 'Go to post',
            iconCls : 'post-go'
        });
        config.items = items;
        return Ext.create('widget.toolbar', config);
    },

    // move to controller
    setActive: function(rec) {
        this.active = rec;
        this.update(rec.data);
    },

    goToPost : function() {
        //window.open(this.active.get('link'));
    },


    openTab : function() {
        //this.fire
    }



});
