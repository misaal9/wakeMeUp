define(function(require){
    'use strict';
    var ko = require('knockout'),
        app = require('durandal/app');

    var AuthenticateService = {};
    
    AuthenticateService.compositionComplete = function compositionComplete() {
        this.isUserLoggedInFlag = true;
    };
    
    AuthenticateService.isUserLoggedIn = function isUserLoggedIn() {
        return this.isUserLoggedInFlag;
    };
    
    AuthenticateService.init = function init() {
        var self = this;
        var validAuth = ko.observable(true);
        
        // do something to check authentication
        
        // use above method to resolve or reject the auth response
        var authPromise = new Promise(function(resolve, reject){
            if (validAuth()) {
                resolve({
                    status: 'Success',
                    message: 'Logged in successfully'
                });
                self.isUserLoggedInFlag = true;
                
            } else {
                reject({
                    status: 'Fail',
                    message: 'Unable to login'
                });
                self.isUserLoggedInFlag = false;
            }
        });
        
        return authPromise;
    };
    
    return AuthenticateService;
});

/*
Reference for this auth concept
http://stackoverflow.com/questions/25676387/how-can-i-have-a-seperate-login-page-using-durandal-that-has-a-different-layout
*/