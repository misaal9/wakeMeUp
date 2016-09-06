define(function(require){
    'use strict';
    var ko = require('knockout'),
        app = require('durandal/app');

    var AuthenticateService = {};
    var isUserLoggedInFlag = ko.observable(false);
    
    AuthenticateService.isUserLoggedIn = function isUserLoggedIn() {
        return isUserLoggedInFlag();
    };
    
    AuthenticateService.init = function init() {
        var self = this;
        var validAuth = ko.observable(true); // todo - HARDCODED SHOULD BE REMVOED
        
        // do something to check authentication
        
        // use above method to resolve or reject the auth response
        var authPromise = new Promise(function(resolve, reject){
            if (validAuth()) {
                isUserLoggedInFlag(true);
                resolve({
                    status: 'Success',
                    message: 'Logged in successfully'
                });
                
            } else {
                isUserLoggedInFlag(false);
                reject({
                    status: 'Fail',
                    message: 'Unable to login'
                });
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