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
}]);
