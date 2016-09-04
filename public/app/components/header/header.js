'use strict';
(function(){
	var module = angular.module('bullsfirst.header', []);

	controllerfunction.$inject = [];

	function controllerfunction() {
	this.title = 'bullsfirst';
	this.welcomeText = 'Calling All Bull Markets';
	}

	var componentConfig = {
		templateUrl: '/app/components/header/header.html',
		controller: controllerfunction
	};
	module.component('header', componentConfig);
})();