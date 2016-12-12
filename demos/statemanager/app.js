Ext.Loader.setPath({
    "StateManager": "app"
});

Ext.onReady(function() {
    Ext.require(['Ext.state.*', 'StateManager.state.MyLocalStorageProvider'], function() {
        
        Ext.state.Manager.setProvider(Ext.create('StateManager.state.MyLocalStorageProvider'));
        // Ext.state.Manager.setProvider(Ext.create('Ext.state.CookieProvider'));
        
        Ext.application({
            name: 'StateManager',
        
            extend: 'StateManager.Application',
            
            requires: [
               'StateManager.view.main.Main'
            ],
            
            autoCreateViewport: 'StateManager.view.main.Main'
        });        
    });
});
