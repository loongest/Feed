Ext.Loader.setConfig({enabled:true});

/*
 * models, stores and controller will live in this namespace
 * autoCreateViewport true , by convention, include the app/view/Viewport.js file.
 */
Ext.application({
    name				: 'Fss',
    autoCreateViewport	: true,
    appFolder			: 'app',
    controllers         : ['Feed'],


    launch : function() {
        console.log('application start');
        // This is fired as soon as the page is ready
    }

});

