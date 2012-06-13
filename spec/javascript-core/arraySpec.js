describe("Arrays", function () {
	
	describe("OVERVIEW", function () {
	    it("are objects and returns the string 'object' from the typeof operator", function () {
	        var myArray = ['node', 'base', 'rhino'];

			expect(typeof myArray).toEqual('object');
	    });
	
		// index starts at zero
		// can contain any kind of object
		
		// can be created from constructor
		// pass in 1 arguement and this sets the length
		// can be created from literal
		// referenced		
		// undefined
		// delete
		
	});

	describe("PROPERTIES", function () {
	    describe("length", function () {
			it("specifies the number of elements", function () {
				var myArray = ['node', 'base', 'rhino'];
				
				expect(myArray.length).toEqual(3);
	 		});
		});
	});
	
	describe("METHODS", function () {
		// Array.prototype.concat()
		describe("Array.prototype.concat(item...)", function () {
		    it("produces a new array containing a shallow copy of this array with the items appended to it", function () {
		        var a = [1, 2, 3],
					b = ['a', 'b', 'c'],
					c = a.concat(b),
					d = a.concat(b, 'x', 'y', 'z'),
					e = a.concat(4, 5, 6);
						
				expect(c).toEqual([1, 2, 3, 'a', 'b', 'c']);
				expect(d).toEqual([1, 2, 3, 'a', 'b', 'c', 'x', 'y', 'z']);
				expect(e).toEqual([1, 2, 3, 4, 5, 6]);
		    });
		});
		
		// Array.prototype.join()
		describe("Array.prototype.join(seperator)", function () {
		    it("makes a string from an array - by making a string of each of the array's elements and concatening them with the provided seperator", function () {
		        var a = [1, 2, 3, 4],
					b = ['one', 'two', 'three'],
					c = [null, undefined, NaN, 1, 'one', true, false, [1, 2], {foo:'bar'}];
			
				expect(a.join(' ')).toEqual('1 2 3 4');
				expect(b.join(', ')).toEqual('one, two, three');
				expect(c.join(': ')).toEqual(": : NaN: 1: one: true: false: 1,2: [object Object]");
		    });
		});
		
		// Array.prototype.pop()
		describe("Array.prototype.push()", function () {
		    it("removes and returns the last element in this array", function () {
		    	var a = ['a', 'b', 'c'],
		 			b = a.pop();
		
				expect(b).toEqual('c');
				expect(a).toEqual(['a', 'b']);
		    });
		
			it("returns undefined if the array is empty", function () {
			    var a = [];
					b = a.pop();
					
				expect(b).not.toBeDefined();
				expect(a).toEqual([]);
			});
		});
		
		// Array.prototype.push() 
		describe("Array.prototype.push(item..)", function () {
		    it("appends items to the end of an array", function () {
		        var a = [1, 2, 3],
					b = [4, 5];
					c = ['a', 'b', 'c']
					a.push(b);
					c.push('d')
					
				expect(a).toEqual([1, 2, 3, [4, 5]]);
				expect(c).toEqual(['a','b','c', 'd']);		
		    });
		
			it("modifies the array (rather than making a shallow copy)", function () {
				var a = [1, 2, 3],
					b = [4, 5];
					a.push(b);
					b.push(6)
					
				expect(a).toEqual([1, 2, 3, [4, 5, 6]]);
				expect(b).toEqual([4, 5, 6]);
			});
			
			it("returns the new length of the array", function () {
			    var a = ['a', 'b'],
					b = a.push('c');

				expect(b).toEqual(3);
			});
		});
		
		
		// Array.prototype.reverse()
		
		// Array.prototype.shift()
		
		// Array.prototype.slice()
	
		describe("Array.prototype.sort()", function () {
			it("Sorts, in place, the elements of an array", function () {
				var a = ['node', 'base', 'rhino'],
					b = [2, 3, 5, 6, 1, 7, 4];
				
				expect(a.sort()).toEqual(['base', 'node', 'rhino']);
				expect(b.sort()).toEqual([1, 2, 3, 4, 5, 6, 7]);
	 		});
		});
		
		// Array.prototype.splice()
		
		// Array.prototype.unshift()
	});
	
});