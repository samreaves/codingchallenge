'use strict';

describe('myApp.allValues module', function() {

  // Before each test, load the allValues and services modules
  beforeEach(module('myApp.allValues'));
  beforeEach(module('myApp.services'));

  // Initialize global test variables
  var AllValuesCtrl, rootScope, scope, valueAPI, timeout;
  
  // Before each test, load the controller, rootScope, ValueAPI and $timeout
  beforeEach(

  	inject(function ($controller, $rootScope, $injector, $timeout) {
    scope = $rootScope.$new();
    valueAPI = $injector.get('ValueAPI');
    timeout = $timeout;
    
    // Initialize a new scope.
    AllValuesCtrl = $controller('AllValuesCtrl', {
      $scope: scope,
    });


  }));
 
   it('should call ValueAPI and get all values back', inject(function ($q, ValueAPI, $timeout) {
    // Expect AllValuesCtrl to be defined
    expect(AllValuesCtrl).toBeDefined();

    var deferredSuccess = $q.defer();
    spyOn(ValueAPI, 'getAllValues').andReturn(deferredSuccess.promise);
    
	// Resolve with the correct value based on date
    deferredSuccess.resolve(ValueAPI.values);

    // Call the actual controller method.
    AllValuesCtrl.getAllValues(); 
 
    // Expect ValueAPI to be defined and to have been called    
    expect(ValueAPI).toBeDefined();
    expect(ValueAPI.getAllValues).toHaveBeenCalled();
 	
 	// Expect the DOM value to still be null since the promise has not returned
 	expect(scope.values).toBe(null);

 	// Add promise callback to Angular asyncQueue
 	scope.$apply();
 
 	// Expect DOM value to be defined
    expect(scope.values).toEqual(ValueAPI.values);
  }));
});