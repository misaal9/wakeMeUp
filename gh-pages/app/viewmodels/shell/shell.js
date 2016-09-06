define(function(require){
    var router = require('plugins/router');
    
    var shell = {};
   
    shell.router = router;
    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: 'viewmodels/home/home', title: 'Home', nav: true },
            { route: 'time', moduleId: 'viewmodels/time/time', title: 'Time', nav: true },
            { route: 'login', moduleId: 'viewmodels/login/login', title: 'Login', nav: true },
            { route: 'oauthCallback/:access_token', moduleId: 'viewmodels/login/processResponse', nav: false }
        ]).buildNavigationModel();
        
        return router.activate();
    };
    
    return shell;
});