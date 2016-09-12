define(function(require){
    var router = require('plugins/router');
    
    var shell = {};
   
    shell.router = router;
    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: 'viewmodels/notReady/notReady', title: 'Not Ready' }
        ]).buildNavigationModel()
        
        return router.activate();
    };
    
    return shell;
});