define(function(require){
    var router = require('plugins/router');
    
    var shell = {};
   
    shell.router = router;
    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: 'home', title: 'Home', nav: true },
            { route: 'time', moduleId: 'time', title: 'Time', nav: true }
        ]).buildNavigationModel();
        
        return router.activate();
    };
    
    return shell;
});