describe("Functions", function () {
	describe("OVERVIEW", function () {
	    function sum(a, b) {
			return a + b;
		}
	
		anotherSum = function(a, b) {
			return a + b;
		}
	
		andAnotherSum = function sum2(a, b) {
			return a + b;
		}
	
		it("returns the string 'function' from the typeof operator", function () {
			expect(typeof sum).toEqual('function'); 
		});
		
		it("are objects", function () {
		    expect(sum instanceof Object).toBe(true);
			//console.dir(sum);
			//console.dir(anotherSum);
			//console.dir(andAnotherSum);
		});
		
		it("parenthesis are used to call/invok a function", function () {
		    window.sayHello = function() {
				return 'Hello';
			}
			
			spyOn(window, 'sayHello').andCallThrough();
			var result = sayHello(),
				result2 = window.sayHello();
			
			expect(window.sayHello).toHaveBeenCalled();
			expect(result).toEqual('Hello');
			
			expect(sayHello).toHaveBeenCalled();
			expect(result2).toEqual('Hello');
		});
		
		it("parenthesis can contain 0 or more expressions, seperated by comas", function () {
			expect(sum()).toBeNaN();
			expect(sum(1)).toBeNaN();
			
		});
		
		it("extra argument values are ignored", function () {
			expect(sum(1,2,3)).toBe(3);
		})
		
		it("missing arguments are set to undefined", function () {
			expect(sum(1)).toBeNaN();  // 1 + undefined = NaN 
		})
		
		it("return undefined if a return value isn't explicitly defined", function () {
		    var flag = null
			function updateFlag(value) {
				flag = value;
			}
		
			var foo = updateFlag(10);
			
			expect(foo).not.toBeDefined();
			expect(flag).toEqual(10);
		});
		
		it("variables set inside a function are not accessible outside the function", function () {
		    function setVariables() {
				// global variable
				bar = 'bar';
				window.bar2 = 'bar2';
				
				// local variable
				var foo = 'foo';
			}
			
			setVariables();
			
			// an error will be thrown as foo is not defined outside setVariables
			try {
				foo;
			} catch (e) {
				if(typeof console !== "undefined") {
					console.log(e);
				}
			}
			
			expect(bar).toBeDefined();
			expect(bar).toEqual('bar');
			
			expect(bar2).toBeDefined();
			expect(bar2).toEqual('bar2');
			
		});
		
		it("local variables overwrite global variables", function () {
		    
			window.foo = 'foo';
			window.bar = 'bar';
			window.qux = 'qux';
			
			function setVars() {
				foo = 'new foo'; 		// overwrite global variable
				var bar = 'new bar';	// create local variable, no affect on global variable
				
				expect(window.foo).toEqual('new foo');
				expect(window.bar).toEqual('bar'); // global function has not been updated
				expect(window.qux).toEqual('qux');
				
				expect(foo).toEqual('new foo');
				expect(bar).toEqual('new bar'); // local variable
				expect(qux).toEqual('qux'); 
			}
			setVars();
			expect(foo).toEqual('new foo');
			expect(bar).toEqual('bar');
				
		});
		
		it("functions can be called as soon as they are defined by adding parenthisis- i.e self invoking", function () {
		    
			var test = (function() {
				return 'hello';
			}())
		
			expect(test).toEqual('hello');
		
		});
		
				// the 'function invocation pattern' binds 'this' to the global object

				// the 'method invocation pattern' binds 'this' to the object

				// the 'constructor invocation pattern' binds 'this' this to the instantiated object

				// the 'apply invocation pattern' sets this to whatever is passed in

				// functions can have properties

				// functions can have methods

				// the return statement can be used to cause the function to return early

				// -- RECURSION -- //


				// -- SCOPE -- //
				// parameters and variable defined in a function are not visible outside of the function

				// a variable defined anywhere within a function is visible everywhere within the function


				// -- CLOSURE -- //

				// an inner function has access to the context that is was created within

				// -- CALLBACKS -- //
		
	});

	describe("PROPERTIES", function () {
		describe("Function.prototype.length", function () {
		    it("should return the number of parameters a function expects", function () {

				function someFunctions(a, b, c, e, f) {

					return 'foo';
				}
				expect(someFunctions.length).toEqual(5);
				expect(alert.length).toEqual(1);
				expect(parseInt.length).toEqual(2)

			});
		});	
	});

	describe("METHODS", function () {
	    
		// Function.prototype.apply()
		
		// Function.prototype.join()
	
	});
});