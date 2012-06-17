/*jslint    sloppy: true, nomen:true  */
/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray, _, console*/

describe("Objects", function () {
	
	describe("OVERVIEW", function () {
	    it("are a dynamic collection of properties", function () {
	        var person = {
				age: 36,
				name: 'Alistair',
				getName: function() {
					return this.name;
				}
			}	
			person.name = "Al";
			
			expect(person.name).toEqual("Al");
	    });
	
		it("every property has a key string that is unique within that object", function () {
		    var myObj = {
				foo: 'test',
				foo: 'test2',
				'first name': 'bob'
			}
		
			expect(myObj.foo).toEqual('test2');
			expect(myObj['first name']).toEqual('bob');
		});
		
		it("values can be retrieved by wrappig a string expression in a [ ] suffix", function () {
		    var myObj = {
				foo: 'test',
				'first name': 'bob',
				bar2: 'blah',
			}

			expect(myObj['foo']).toEqual('test');
			expect(myObj['first name']).toEqual('bob');
			expect(myObj['bar' + (1 + 1)]).toEqual('blah');
		});
		
		it("values can be retrieved by . notation if the name is a legal name", function () {
		    var myObj = {
				foo: 'test',
				bar2: 'blah',
			}
			
			expect(myObj.foo).toEqual('test');
			expect(myObj.bar2).toEqual('blah');
		});
		
		
		it("undefined is produced if an attempt is made to retrieve a nonexistent member", function () {
		    var shirt = {
				size: 'small'
			}
			
			expect(shirt.height).toBeUndefined();
		});
		
		it("attempting to retrive values from undefined will throw a TypeError exception", function () {
		    
			function getHandle() {
				var car = {wheel: true},
					a = car.door.handle;
			}
			
			expect(getHandle).toThrow();
			expect(getHandle).toThrow('car.door is undefined');
		});
		
		it("a value in an object can be updated by assigment", function () {
		    var person = {
				age: 32,
				name: 'John'
			}
			
			expect(person.age).toEqual(32);
			expect(person.name).toEqual('John');
			
			person.age = 40;
			person.name = 'Bob';
			
			expect(person.age).toEqual(40);
			expect(person.name).toEqual('Bob');
		});
		
		it("a value is assigned to a property name that does not already exist property is created andvalue assigned", function () {
		    var person = {
				age: 32,
				name: 'John'
			}
			expect(person.sex).toBeUndefined();
			
			person.sex = 'Male';
			expect(person.sex).toEqual('Male');
		});
		
		it("properties can be removed by using the delete operator", function () {
		    var person = {
				age: 32,
				name: 'John'
			}
			
			expect(person.name).toEqual('John');
			
			delete person.name;
			
			expect(person.name).not.toEqual('John');
			expect(person.name).not.toBeDefined();
		});
		
		it("are passed by reference. They are never copied", function () {
		    var a = {},
				b = {},
				c = a;
				
			expect(a === c).toBe(true);
			expect(a === b).toEqual(false);
			
			a.age = 32;
			expect(c.age).toEqual(32);
		});
	});

	describe("PROPERTIES", function () {
	    // Object.prototype
	});
	
	describe("METHODS", function () {
		// Object.prototype.hasOwnProperty()
	
	});
	
	describe("EXAMPLES", function () {
	    
	});
});