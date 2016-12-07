Ext.application({
    name: 'StateManager',

    extend: 'StateManager.Application',
    
    autoCreateViewport: 'StateManager.view.main.Main',
	
	requires: [
	   "Ext.state.*"
	]
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to StateManager.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
