define(function(require){
    'use strict';
    var ko = require('knockout'),
        app = require('durandal/app');

    var AuthenticateService = {};
    var isUserLoggedInFlag = ko.observable(false);
    var STRINGS = {
        endPoint : 'https://accounts.google.com/o/oauth2/v2/auth',
        spacer : '&',
        responseType : 'token',
        redirectUri : '',
        clientId : '420550494003-kv6sh06gt3u1codqdao4tra8tjiu4qtq.apps.googleusercontent.com'
    };
    
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
    
    AuthenticateService.activate = function activate() {
        gapi.auth2.getAuthInstance({
            client_id: STRINGS.clientId
        }).then(function(r){
            console.info('r', r.isSignedIn.get());
        });
        this.bindHandlers();
    };

    AuthenticateService.bindHandlers = function bindHandlers() {
        this.onLoginClickHandler = this.onLoginClick.bind(this);
    };
    
    AuthenticateService.onLoginClick = function onLoginClick(d, e){
        console.info(e); // e contains button details
        app.showMessage('Login modal', 'Login', ['Close'], true);
    };
    
    AuthenticateService.sendURl = function sendURl() {
        var endPoint = 'https://accounts.google.com/o/oauth2/v2/auth',
            spacer = '&',
            responseType = 'response_type=token',
            redirectUri = 'redirect_http://localhost:8000/oauthCallback',
            clientId = '420550494003-kv6sh06gt3u1codqdao4tra8tjiu4qtq.apps.googleusercontent.com';

        /* Sample URL
        https://accounts.google.com/o/oauth2/v2/auth?
        scope=email%20profile&
        state=%2Fprofile&
        redirect_uri=https%3A%2F%2Foauth2.example.com%2Foauthcallback&
        response_type=token&
        client_id=812741506391.apps.googleusercontent.com&
        nonce=DgkRrHXmyu3KLd0KDdfq
        */

        /*
        https://accounts.google.com/o/oauth2/v2/auth?response_type=token&redirect_uri=http://localhost:8000/oauthCallback&client_id=420550494003-kv6sh06gt3u1codqdao4tra8tjiu4qtq.apps.googleusercontent.com&scope=email%20profile
        */
    };
    
    AuthenticateService.onSignIn = function onSignIn() {
        var signInPromise;
        var initAuth = gapi.auth2.getAuthInstance({
            client_id: STRINGS.clientId
        });
        
        initAuth.then(function(r){
            signInPromise = r.signIn().then(function(r){
                console.info('asd', r);
            });
        });
        
        signInPromise.then(function(){
            console.info('asd');
        });
        
        /*console.info('onSignIn', googleUser);
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());*/
    }
    AuthenticateService.signOut = function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        console.info('auth2', auth2);
        auth2.signOut().then(function () {
            console.info('User signed out.');
        });
    }

    return AuthenticateService;
});

/*
Reference for this auth concept
http://stackoverflow.com/questions/25676387/how-can-i-have-a-seperate-login-page-using-durandal-that-has-a-different-layout
*/