'use strict';


// Test the factory
describe('factory: ValueAPI', function() {
  
  // Initialize global test variables
  var ValueAPI;
  var timeout;

  // Before each test, load the services module, ValueAPI object, 
  // and $timeout object
  beforeEach(function() {
  	
  	module('myApp.services');

  	inject(function($injector) {
  		ValueAPI = $injector.get('ValueAPI');
	});

	inject(function($timeout) {
		timeout = $timeout;
	})
	

  })

  // Make sure ValueAPI object is defined
  describe('factory ValueAPI toBeDefined', function() {
  	it('should be defined', function() {
  		expect(ValueAPI).toBeDefined();
  	})
  })

  // Make sure ValueAPI.values is populated
  describe('property ValueAPI.values toBeEqualTo', function() {
  	it('should be equal to', function() {
  		expect(ValueAPI.values).toEqual([{
                        id: 1,
                        header: "Show pride in our ability",
                        description: "We work hard, like to learn new things, and are always on the lookout for ways to grow personally and professionally. We are proud of what we know, and use our knowledge to help our clients be more successful.",
                        category: "Core Values"
                    },
                    {
                        id: 2,
                        header: "Do it right the first time",
                        description: "We hate re-work, so do our best work the first time. And before we ever hit \"send\" or say a project is complete, we double- or triple-check it for quality.",
                        category: "Core Values"
                    },
                    {
                        id: 3,
                        header: "Delight our clients",
                        description: "The objective of every client interaction – internal or external – is to make every experience outstanding, surprising our clients with our knowledge, quality, level of service, and speed.",
                        category: "Focus on Service"
                    },
                    {
                        id: 4,
                        header: "Follow-up on everything",
                        description: "Internal and external clients rely on us, and we rely on them. Record a follow up date and time for every promised action and take responsibility for its completion.",
                        category: "Focus on Service"
                    },
                    {
                    
                        id: 5,
                        header: "Let silence do the heavy lifting",
                        description: "The only way to know what someone else thinks, believes or knows is to ask them, and then to carefully listen to what they say. You have two ears and one mouth - use them proportionally.",
                        category: "The Collaborative Way"
                    },
                    {

                        id: 6,
                        header: "Involve Everyone",
                        description: "Everyone has ideas and wants to be involved in our success. We value each person’s input, so be sure to involve those who don’t say much in every discussion. It’s often the quiet team members who bring the most insight. ",
                        category: "The Collaborative Way"
                    },
                    {
                        id: 7,
                        header: "Take responsibility and be accountable",
                        description: "Don’t be a victim. Ask for what you need and take full responsibility for your success. If you see a problem, own it until it’s resolved.",
                        category: "Personal Effectiveness"
                    },
                    {
                        id: 8,
                        header: "Be a coach",
                        description: "Help your team members learn and grow. We thrive as a business and as individuals when we are constantly growing and improving..",
                        category: "Personal Effectiveness"
                    }
                    ]
  			)
  	})
  })

  // Make sure all values method is defined
  describe('method ValueAPI.getAllValues toBeDefined', function() {
  	it('should be defined', function() {
  		expect(ValueAPI.getAllValues).toBeDefined();
  	})
  })

  // Make sure getValueByID method is defined
  describe('method ValueAPI.getValueByID toBeDefined', function() {
  	it('should be defined', function() {
  		expect(ValueAPI.getValueByID).toBeDefined()
  	})
  })

  // Make sure getValueByID method works as planned
  describe('method ValueAPI.getValueByID toEqual', function() {
  	it('should return value with ID 6', function() {
  		
  		// simulate scope variable
  		var value;
  		
  		// Make the AJAX call
  		ValueAPI.getValueByID(6).then(function(data) {
  			
  			// Simulate the DOM updating
  			value = data;
  		})
  		
  		// Flush timeouts so that the promise resolves
  		timeout.flush();
  		
  		// Expect the DOM's value to have updated
  		expect(value).toEqual({

                        id: 6,
                        header: "Involve Everyone",
                        description: "Everyone has ideas and wants to be involved in our success. We value each person’s input, so be sure to involve those who don’t say much in every discussion. It’s often the quiet team members who bring the most insight. ",
                        category: "The Collaborative Way"
                    })
  	})
  })

});