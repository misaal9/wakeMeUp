define(function(){
    'use strict';
    var gapi = require('gapi');
    
    var AuthenticationService = {};
        
    AuthenticationService.isUserLoggedIn = function isUserLoggedIn() {
        this.initGapi();
        this.checkForLogin();
        return promise;
    };
    
});