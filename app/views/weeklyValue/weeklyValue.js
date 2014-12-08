'use strict';

angular.module('myApp.weeklyValue', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/weeklyValue', {
    templateUrl: 'views/weeklyValue/weeklyValue.html',
    controller: 'WeeklyValueCtrl'
  });
}])

.controller('WeeklyValueCtrl', ["ValueAPI", "$scope", "$rootScope", function(ValueAPI, $scope, $rootScope) {
	
	$scope.value = null;

	$scope.getValueForWeek = function () {
		var date = new Date(),
			weekNumber = date.getWeekNumber(),
			valueID = weekNumber % 8;


		ValueAPI.getValueByID(valueID).then(function (data) {
			$rootScope.loading = false;
			$scope.value = data;
		});
	};

	$scope.getValueForWeek();
}]);