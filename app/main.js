requirejs.config({
    paths: {
        'text': '../lib/require/text', 
        'knockout': '../lib/knockout/knockout-3.1.0', 
        'jquery': '../lib/jquery/jquery-1.9.1.min', 
        'bootstrap': '../lib/bootstrap/js/bootstrap.min', 
        'durandal': '../lib/durandal/js',
        'plugins': '../lib/durandal/js/plugins',
        'transitions': '../lib/durandal/js/transitions'
    }
});
define(function (require) {
    var system = require('durandal/system'), 
        app = require('durandal/app');
    
    system.debug(true);
    
    app.title = 'Wake Me Up';
    
    app.configurePlugins({
        router: true,
        dialog: true
    });
    
    app.start().then(function(){
        app.setRoot('shell');
    });
    
});