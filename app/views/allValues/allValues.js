'use strict';

angular.module('myApp.allValues', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/allValues', {
    templateUrl: 'views/allValues/allValues.html',
    controller: 'AllValuesCtrl'
  });
}])

.controller('AllValuesCtrl', ["$scope", "$rootScope", "ValueAPI", function($scope, $rootScope, ValueAPI) {
	
	$scope.navigateToWeeklyValue = function() {
		$location.path("/weeklyValue");
		console.log("already on weeklyValue");
	};
	$scope.navigateToAllValues = function() {
		console.log("already on allValues");
	};

	// Array of shown categories
	$scope.shownCategories = [];

	// Toggle categories based on which category was clicked
	$scope.toggleCategories = function(index) {
		$scope.shownCategories[index] = !$scope.shownCategories[index];
	}


	// Initialize two way binding array of values for the DOM and controller
	$scope.categories = null;

	/* 
		getAllValues 
		
		Grabs all values
	*/
	this.getAllValuesSortedByCategory = function () {
		
		// Make AJAX call to server 
		ValueAPI.getAllValuesSortedByCategory().then(function(data) {
			
			// Stop the spinner
			$rootScope.loading = false;

			// Update the data
			$scope.categories = data;

			/*
				Initialize $scope.shownCategories will as many falses as there are categories
			*/ 
			for (var i = 0, categoriesLength = $scope.categories.length; i < categoriesLength; i++) {
				$scope.shownCategories.push(false);
			}
		});
	};


	// Grab all values
	this.getAllValuesSortedByCategory();
}]);