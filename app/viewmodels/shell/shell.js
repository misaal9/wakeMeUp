define(function(require){
    var router = require('plugins/router');
    
    var shell = {};
   
    shell.router = router;
    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: 'viewmodels/home/home', title: 'Home', nav: true },
            { route: 'time', moduleId: 'viewmodels/time/time', title: 'Time', nav: true }
        ]).buildNavigationModel();
        
        return router.activate();
    };
    
    return shell;
});