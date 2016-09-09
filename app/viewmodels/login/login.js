/**
http://stackoverflow.com/questions/26987851/google-javascript-signin-uncaught-typeerror-at-cb-gapi-loaded-041
http://stackoverflow.com/questions/31548091/requirejs-and-google-javascript-api
https://developers.google.com/identity/sign-in/web/people
**/
define(function(require){
    'use strict';
    var Auth = require('services/AuthenticatioService');

    var LoginViewModel = {};
    
    LoginViewModel.isUserLoggedIn = function isUserLoggedIn() {
        return Auth.isUserLoggedIn();
    };
    
    LoginViewModel.compositionComplete = function compositionComplete() {
        console.info(this.isUserLoggedIn());
    };
    
    return LoginViewModel;
});