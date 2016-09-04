/*
References - http://code.ciphertrick.com/2015/11/23/scalable-angularjs-setup-with-gulp-browserify/
*/
'use strict';
// require external dependencies
require('angular');
require('angular-ui-router');
require('angular-mocks');

require('./components/header/header.js');
require('./components/accounts-dashboard/accounts-dashboard.component.js');

var bullsfirst = angular.module('bullsfirst', [
    'ui.router',
    'bullsfirst.header',
    'bullsfirst.accountsdashboard'
]);

bullsfirst.config(['$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) 
    {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
        	.state('home', {
                	url: '/home',
                	template: '<accounts-dashboard></accounts-dashboard>'                	
                	});
    }
  ]);