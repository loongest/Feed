Ext.define('Fss.view.FeedForm', {
    extend      : 'Ext.form.Panel',
    bodyPadding : 10,
    border      : false,
    unstyled    : true,
    alias       : 'widget.feedform',
    items       : [{
        anchor : '100%',
        itemId : 'feed',
        fieldLabel : 'Enter the URL of the feed to add',
        labelAlign : 'top',
        msgTarget : 'under',
        xtype : 'combo',
        store : [
            ['http://rss.cnn.com/rss/edition.rss', 'CNN Top Stories'],
            ['http://sports.espn.go.com/espn/rss/news', 'ESPN Top News'],
            ['http://news.google.com/news?ned=us&topic=t&output=rss', 'Sci/Tech - Google News'],
            ['http://rss.news.yahoo.com/rss/software', 'Yahoo Software News']
        ],
        getInnerTpl : function() {
            return '<div class="feed-picker-url"> {field1} </div> <div class="feed-picker-title"> {field2}</div> ';
        }
    }]

});
