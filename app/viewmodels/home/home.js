define(function(require){
    var app = require('durandal/app'),
        ko = require('knockout');
    
    var shell = {};
    
    shell.name = ko.observable('Misaal');
    
    shell.getName = function getName() {
        app.showMessage(this.name(), 'Check 123', ['Close'], true);
    };
    
    return shell;
});