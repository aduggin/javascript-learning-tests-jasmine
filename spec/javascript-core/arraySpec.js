describe("Arrays", function () {
	var myArray;
	beforeEach(function() {
		myArray = ['node', 'base', 'rhino'];
	});
	
	afterEach(function () {
	    myArray = ['node', 'base', 'rhino'];
	});
	
	describe("OVERVIEW", function () {
	    it("returns the string 'object' from the typeof operator", function () {
	        expect(typeof myArray).toEqual('object');
	    });
	});

	describe("PROPERTIES", function () {
	    describe("length", function () {
			it("specifies the number of elements", function () {
				expect(myArray.length).toEqual(3);
	 		});
		});
	});
	
	describe("METHODS", function () {
	    // Array.prototype.concat()
		
		// Array.prototype.join()
		
		// Array.prototype.pop()
		
		// Array.prototype.push()
		
		// Array.prototype.reverse()
		
		// Array.prototype.shift()
		
		// Array.prototype.slice()
	
		describe("Array.prototype.sort()", function () {
			it("Sorts, in place, the elements of an array", function () {
				expect(myArray.sort()).toEqual(['base', 'node', 'rhino']);
	 		});
		});
		
		// Array.prototype.splice()
		
		// Array.prototype.unshift()
	});
	
});