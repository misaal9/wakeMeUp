requirejs.config({
    paths: {
        'text': '../lib/require/text', 
        'knockout': '../lib/knockout/knockout-3.1.0', 
        'jquery': '../lib/jquery/jquery-1.9.1.min', 
        'bootstrap': '../lib/bootstrap/js/bootstrap.min', 
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions',
        'moment': '../lib/moment/moment.min'
    }
});
define(function (require) {
    var system = require('durandal/system'), 
        app = require('durandal/app'),
        auth = require('services/AuthenticateService'),
        router = require('plugins/router');
    
    system.debug(true);
    
    app.title = 'Wake Me Up';
    
    app.configurePlugins({
        router: true,
        dialog: true,
        widget: {
            kinds: ['clock', 'jumbotron', 'carousel']
        }
    });
    
    app.start().then(function(){
        auth.init()
            .then(function(result){
                console.debug('Logged in successfully');
            })
            .catch(function(err){
                console.error(err.message);
               });
            });
        app.setRoot('viewmodels/shell/shell');
});