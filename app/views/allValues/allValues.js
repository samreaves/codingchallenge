'use strict';

angular.module('myApp.allValues', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/allValues', {
    templateUrl: 'views/allValues/allValues.html',
    controller: 'AllValuesCtrl'
  });
}])

.controller('AllValuesCtrl', ["$scope", "$rootScope", "ValueAPI", function($scope, $rootScope, ValueAPI) {
	
	// Initialize two way binding array of values for the DOM and controller
	$scope.values = null;

	/* 
		getAllValues 
		
		Grabs all values
	*/
	this.getAllValues = function () {
		
		// Make AJAX call to server 
		ValueAPI.getAllValues().then(function (data) {
			
			// Stop the spinner
			$rootScope.loading = false;

			// Update the data
			$scope.values = data;
		});
	};

	// Grab all values
	this.getAllValues();
}]);