define(['durandal/composition','jquery'], function(composition, $) {
    var ctor = function() { };
 
    ctor.prototype.activate = function(settings) {
        this.settings = settings;
    };
 
    ctor.prototype.getHeaderText = function(item) {
        if (this.settings.headerProperty) {
            return item[this.settings.headerProperty];
        }
 
        return item.toString();
    };
 
    ctor.prototype.afterRenderItem = function(elements, item) {
        var parts = composition.getParts(elements);
        var $itemContainer = $(parts.itemContainer);
 
        $itemContainer.hide();
 
        $(parts.headerContainer).bind('click', function() {
            $itemContainer.toggle('fast');
        });
    };
 
    return ctor;
});

/*define(function(require){
    'use strict';
    var ko = require('knockout');
    
    var TimerWidget = function TimerWidget(settings) {
        this.settings = settings;
        this.init();
    };
    
    TimerWidget.init = function init () {
        this.setupData();
        this.bindhandlers();
    };
    
    TimerWidget.prototype.setupData = function setupData() {
        console.info('setupData');
        this.startTime = ko.observable(10000); // 10 secs
        this.endTime = ko.observable(0); // default to 0
    };
    
    TimerWidget.prototype.bindhandlers = function bindhandlers() {
        console.info('bindhandlers');
        this.onStartClickHandler = this.onClickStartTimer.bind(this);
    };
    
    TimerWidget.onClickStartTimer = function onClickStartTimer(vals) {
        console.info('vals', vals);
    };
    
});*/