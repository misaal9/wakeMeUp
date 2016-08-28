define(function(require){
    var router = require('plugins/router');
    
    var shell = {};
   
    shell.router = router;
    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: 'home', title: 'Home', nav: true },
            { route: 'pg2', moduleId: 'page2', title: 'Page 2', nav: true }
        ]).buildNavigationModel();
        
        return router.activate();
    };
    
    return shell;
});