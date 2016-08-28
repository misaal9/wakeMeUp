define(function(require){
    'use strict';
    var ko = require('knockout');
    
    var PageTwoViewModel = {};
    
    PageTwoViewModel.data = {
        name: ko.observable('Rohit Diwakar'),
        age: ko.observable(29)
    };
    
    return PageTwoViewModel;
});