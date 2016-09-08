define(function(require){
    var router = require('plugins/router'),
        Auth = require('services/AuthenticateService');
    
    var shell = {};
   
    shell.router = router;
    
    shell.canActivate = function canActivate() {
        return true;
    };

    shell.activate = function activate(){
        router.map([
            { route: '', moduleId: 'viewmodels/home/home', title: 'Home', nav: true },
            { route: 'time', moduleId: 'viewmodels/time/time', title: 'Time', nav: true },
            { route: 'login', moduleId: 'viewmodels/login/login', title: 'Login', nav: true },
            { route: 'oauthCallback/:access_token', moduleId: 'viewmodels/login/processResponse', nav: false }
        ])
        .buildNavigationModel()
        .activate({
            /*pushState: true*/
        });
        
        if (!Auth.isUserLoggedIn()) {
            router.navigate('login', {
                trigger: true,
                replace: true
            });
        }
        
        return router;
    };
    
    return shell;
});