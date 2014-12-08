'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ngTouch',
  'angularSpinner',
  'myApp.weeklyValue',
  'myApp.allValues',
  'myApp.services'
])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/weeklyValue'});
}])
.controller("navigationController", ["$location", function($location) {
	$scope.navigateToWeeklyValue = function() {
		if ($location.path !== "/weeklyValue") {
			console.log("navigating to weeklyValue");
			$location.path("/weeklyValue");
		}
		console.log("already on weeklyValue");
	};
	$scope.navigateToAllValues = function() {
		if ($location.path !== "/allValues") {
			$location.path("/allValues");
		}
		console.log("already on allValues");
	};
}])
