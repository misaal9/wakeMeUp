define(function(require){
    'use strict';
    var LoginService = {};
    
    LoginService.analyseResponse = function analyseResponse(response) {
        console.info('URL response', response);
    };
    
    return LoginService;
});