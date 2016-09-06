define(function(require){
    'use strict';
    var app = require('durandal/app');
    var LoginService = require('services/LoginService');
    var LoginViewModel = {};
    
    var STRINGS = {
        endPoint : 'https://accounts.google.com/o/oauth2/v2/auth',
        spacer : '&',
        responseType : 'token',
        redirectUri : '',
        clientId : '420550494003-kv6sh06gt3u1codqdao4tra8tjiu4qtq.apps.googleusercontent.com'
    };

    LoginViewModel.activate = function activate() {
        this.bindHandlers();
    };

    LoginViewModel.bindHandlers = function bindHandlers() {
        this.onLoginClickHandler = this.onLoginClick.bind(this);
    };
    
    LoginViewModel.onLoginClick = function onLoginClick(d, e){
        console.info(e); // e contains button details
        app.showMessage('Login modal', 'Login', ['Close'], true);
    };
    
    LoginViewModel.sendURl = function sendURl() {
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

    return LoginViewModel;
});