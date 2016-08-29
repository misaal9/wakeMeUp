define(function(require){
    'use strict';
    var ko = require('knockout');
    
    var PageTwoViewModel = {};
    
    PageTwoViewModel.data = {
        name: ko.observable('Rohit Diwakar'),
        age: ko.observable(29),
        projects: [{
            'title': 'First project',
            'name': 'The first one',
            'headerProperty': 'headerProperty'
        }, {
            'title': 'Second project',
            'name': 'The second one',
            'headerProperty': 'headerProperty'
        }]
    };
    
    return PageTwoViewModel;
});