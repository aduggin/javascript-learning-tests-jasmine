describe("Arguments", function () {
	
	function demo(a, b, c, d, e) {
		return arguments;
	}
	
	describe("OVERVIEW", function () {
		it("object is created when a function is invoked", function () {
		    		
			function go() {
				expect(arguments).toBeDefined();
				expect(arguments.length).toBeDefined();
			}
			
			go();
		
		});
		
		it("is an Array-like object corresponding to the arguments passed to a function", function () {
		    
			var bar = demo(1, 2, 'hello', 100);
			
			expect(typeof arguments).toEqual('object');
			expect(bar instanceof Object).toBeTruthy();
			
			expect(bar[0]).toEqual(1);
			expect(bar[1]).toEqual(2);
			expect(bar[2]).toEqual('hello');
			expect(bar[3]).toEqual(100);

			expect(bar).not.toBeArray();
			
		});
		
		it("can be set by a function", function () {
		    
			// convert number strings to numbers and anything other non-numbers to 0
			function sumArgs(args) {
				var i,
					len = arguments.length,
					sum = 0;
					
				for(i = 0; i < len; i++) {
					if (typeof arguments[i] !== 'number') {
						arguments[i] = parseInt(arguments[i]) || 0;
					}
					sum += arguments[i];
				}
				
				return sum;
			}
			
			expect(sumArgs(1, '2', 'foo', [], function() {return 'foo';} )).toEqual(3);
			
		});
	});
	
	describe("PROPERTIES", function () {		
		describe("Arguments.length", function () {
			it("the number of arguments passed to a function", function () {
				var foo = demo(1, 2);
			 	expect(foo.length).toEqual(2);
			});
		});
	});
	
	describe("EXAMPLES", function () {
	   	it("set a default value for an argument ", function () {
			function sum(a, b) {
				// prevent NaN being returned if only 1 parameter is passed in
				if (typeof b === 'undefined') {
					b = 0;
				}
				return a + b;
			}
			
			var result = sum(10);
			expect(result).toEqual(10);
			expect(result).not.toBeNaN();
			
			expect(sum(10, 5)).toEqual(15);
		});
		
	
		it("use arguments.length to create a function that is flexible about the number of accepted parameters", function () {
			function flexibleSum(args) {
				var i,
					len = arguments.length,
					sum = 0;
					
				for(i = 0; i < len; i++) {
					sum += arguments[i];
				}
				
				return sum;
			}
			
			expect(flexibleSum(1)).toEqual(1);
			expect(flexibleSum(1, 2)).toEqual(3);
			expect(flexibleSum(1, 2, 3, 4, 5, 6)).toEqual(21);	
	    });
	});
	
	it("turn the arguments object into an array", function () {
		(function someFunction() {
			var args = Array.prototype.slice.call(arguments);

			expect(args).toBeArray();
			expect(args.reverse()).toEqual([6,5,4,3,2,1]);
			
		})(1,2,3,4,5,6)		
	});
	
	it("turn the arguments object into an array using [] instead of Array.prototype", function () {
		(function someFunction() {
			var args = [].slice.call(arguments);
			
			expect(args).toBeArray();
			expect(args.reverse()).toEqual([6,5,4,3,2,1]);
			
		})(1,2,3,4,5,6)		
	});
	
	
	
});