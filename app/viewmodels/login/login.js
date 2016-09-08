/**
http://stackoverflow.com/questions/26987851/google-javascript-signin-uncaught-typeerror-at-cb-gapi-loaded-041
http://stackoverflow.com/questions/31548091/requirejs-and-google-javascript-api
https://developers.google.com/identity/sign-in/web/people
**/
define(function(require){
    'use strict';
    var app = require('durandal/app');
    
    var gapi = require('gapi');
    
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
    
    LoginViewModel.onSignIn = function onSignIn(googleUser) {
        console.info('onSignIn');
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
    }
    LoginViewModel.signOut = function signOut() {
        var auth2 = gapi.auth2.getAuthInstance();
        console.info('auth2', auth2);
        auth2.signOut().then(function () {
            console.info('User signed out.');
        });
    }

    return LoginViewModel;
});