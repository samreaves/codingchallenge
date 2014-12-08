'use strict';

// Declare new module for this view
angular.module('myApp.weeklyValue', ['ngRoute'])

// Configure the module with a route, partial and controller
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weeklyValue', {
    templateUrl: 'views/weeklyValue/weeklyValue.html',
    controller: 'WeeklyValueCtrl'
  });
}])

// Build out the controller
.controller('WeeklyValueCtrl', ["ValueAPI", "$scope", "$rootScope", function(ValueAPI, $scope, $rootScope) {
	
	// Initialize two way binding value for the DOM and controller
	$scope.value = null;

	/* 
		getValueForWeek 
		
		Determines value number based on week number of the year, 
		then makes AJAX call to to server for that value
	*/
	this.getValueForWeek = function () {
		
		// Grab the which week we're on for the year.
		var date = new Date(),
			weekNumber = date.getWeekNumber();

		/* 
		Assign the nth value based on week number divided by 8 
		(since there are only 8 in the test) 
		*/
		var valueID = weekNumber % 8;

		// Make AJAX call to server 
		ValueAPI.getValueByID(valueID).then(function (data) {
			
			// Stop the spinner
			$rootScope.loading = false;

			// Update the data
			$scope.value = data;
		});
	};

	// Grab value for this week and display it to the DOM
	this.getValueForWeek();
}]);