'use strict';
(function(){
	var module = angular.module('bullsfirst.accountsdashboard', []);

	controllerfunction.$inject = ['$http'];

	function controllerfunction($http) {
		var self = this;
        // Initiate $http get to fetch accounts data
        $http.get("/accounts")  
        .then(function(response) {
            self.rows = response.data;
            self.totals = {
                name: '',
                marketValue: 0,
                cash: 0,
                legend: 'none'
            };
            // Build Totals Row
            for (var i = 0; i < self.rows.length; i++) {
                self.totals.marketValue += self.rows[i].marketValue;
                self.totals.cash += self.rows[i].cash;
            }
        });	

    self.addAccount = function () {
        self.rows.push({
            name: 'New Account',
            marketValue: Math.random() * 100000,
            cash: Math.random() * 400000,
            legend: 'cyan'
        });
    }

	}

	var componentConfig = {
		templateUrl: '/app/components/accounts-dashboard/accounts-dashboard.html',
		controller: controllerfunction
	};
	module.component('accountsDashboard', componentConfig);
})();