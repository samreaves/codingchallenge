'use strict';


// Test the WeeklyValue controller
describe('Controller: WeeklyValueCtrl', function () {
  
  // Before each test, load the weeklyValue and services modules
  beforeEach(module('myApp.weeklyValue'));
  beforeEach(module('myApp.services'));

  // Initialize global test variables
  var WeeklyValueCtrl, rootScope, scope, valueAPI, timeout;
  
  // Before each test, load the controller, rootScope, ValueAPI and $timeout
  beforeEach(

  	inject(function ($controller, $rootScope, $injector, $timeout) {
    scope = $rootScope.$new();
    valueAPI = $injector.get('ValueAPI');
    timeout = $timeout;
    
    // Initialize a new scope.
    WeeklyValueCtrl = $controller('WeeklyValueCtrl', {
      $scope: scope,
    });


  }));
 
   it('should call ValueAPI based on the date', inject(function ($q, ValueAPI, $timeout) {
    // Expect WeeklyValueCtrl to be defined
    expect(WeeklyValueCtrl).toBeDefined();

    var deferredSuccess = $q.defer();
    spyOn(ValueAPI, 'getValueByID').andReturn(deferredSuccess.promise);
    
    // Grab the which week we're on for the year.
		var date = new Date(),
			weekNumber = date.getWeekNumber();

	/* 
	Assign the nth value based on week number divided by 8 
	(since there are only 8 in the test) 
	*/
	var valueID = weekNumber % 8;

	// Resolve with the correct value based on date
    deferredSuccess.resolve(ValueAPI.values[valueID - 1]);

    // Call the actual controller method.
    WeeklyValueCtrl.getValueForWeek(); 

    /* 
    Expect ValueAPI to be defined, to have been called, 
    and to have been called with the same ID
    */
    expect(ValueAPI).toBeDefined();
    expect(ValueAPI.getValueByID).toHaveBeenCalled();
    expect(ValueAPI.getValueByID).toHaveBeenCalledWith(valueID);
 	
 	// Expect the DOM value to still be null since the promise has not returned
 	expect(scope.value).toBe(null);

 	// Add promise callback to Angular asyncQueue
 	scope.$apply();
 
 	// Expect DOM value to be defined
    expect(scope.value).toBeDefined();
  }));
});