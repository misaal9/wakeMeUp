define(function(require){
    'use strict';
    var router = require('durandal/router');
    var ProcessResponse = {};
    
    ProcessResponse.activate = function activate(accessToken){
        console.info('accessToken', accessToken);
        if (accessToken) {
            console.info('Token received. Heading home.');
            router.navigate('#home');
        }
    };
    
    return ProcessResponse;
});