define(function(require){
    'use strict';
    var ko = require('knockout'),
        $ = require('jquery'),
        moment = require('moment');
    
    var ClockViewModel = function ClockViewModel(settings) {
        this.settings = settings;
    };
    
    ClockViewModel.prototype.activate = function() {
        this.setupInitialData();
        this.init();
        this.bindHandlers();
    };
    
    ClockViewModel.prototype.setupInitialData = function setupInitialData() {
        var self = this;
        this.data = {
            showTimeLabel: 'Show Time',
            showDateLabel: 'Show Date',
            currentTimeLabel: 'Current Time',
            currentDateLabel: "Today's Date",
        };
        this.mainHeaderTitle = ko.observable(this.data.currentTimeLabel);
        this.dateTimeBtnLabel = ko.observable(this.data.showDateLabel);
        this.isCurrentTimeActive = ko.observable(true);
        this.isCurrentTimeActive.subscribe(function(isTimeActive){
            if (isTimeActive) {
                self.dateTimeBtnLabel(self.data.showDateLabel);
                self.mainHeaderTitle(self.data.currentTimeLabel);
            } else {
                self.dateTimeBtnLabel(self.data.showTimeLabel);
                self.mainHeaderTitle(self.data.currentDateLabel);
            }
            
        });
        this.currentTime = ko.observable();
        this.todaysDate = ko.observable();
    };
    
    ClockViewModel.prototype.init = function init() {
        this.setDateTime();
    };
    
    ClockViewModel.prototype.bindHandlers = function bindHandlers() {
        this.showDateTimeHandler = this.onClickshowDateTimeBtn.bind(this);
    };
    
    ClockViewModel.prototype.onClickshowDateTimeBtn = function onClickshowDateTimeBtn() {
        if (this.isCurrentTimeActive()) {
            this.isCurrentTimeActive(false);
        } else {
            this.isCurrentTimeActive(true);
        }
    };
    
    ClockViewModel.prototype.setDateTime = function setDateTime() {
        this.getDate();
        this.getTime();
    };

    ClockViewModel.prototype.getDate = function getDate() {
        var date = new Date();
        var dateFormatted = moment(date).format('DD MMM YYYY');
        this.todaysDate(dateFormatted);
    };

    ClockViewModel.prototype.getTime = function getTime() {
        var self = this;
        self.setTime();
        setInterval( function (){
            self.setTime();
        }, 1000);
    };
    
    ClockViewModel.prototype.setTime = function setTime() {
        var date = new Date();
        var showDate = moment(date).format('LTS');
        this.currentTime(showDate);
    };
    
    return ClockViewModel;
});