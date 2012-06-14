describe("Arrays", function () {
	
	describe("OVERVIEW", function () {
	    
		it("are ordered lists of numerically indexed values, beginning with the index zero", function () {
		    var myColours = ['red', 'blue', 'yellow'];
			
			expect(myColours[0]).toBeDefined();
			expect(myColours[1]).toBeDefined();
			expect(myColours[2]).toBeDefined();
			
			expect(myColours[0]).toEqual('red');
			expect(myColours[1]).toEqual('blue');
			expect(myColours[2]).toEqual('yellow');		
		});
		
		it("can hold any type of value", function () {
			var myArray = [1, null, undefined, ['a', 'b'], { foo: 'bar'}, function() { return 1; }, 'foo', false]
		    expect(myArray[0]).toBeNumber();
			expect(myArray[0]).toEqual(1);
			
			expect(myArray[1]).toBeNull();
			expect(myArray[1]).toEqual(null);
			
			expect(myArray[2]).toBeUndefined();
			expect(myArray[2]).toEqual(undefined);
			
			expect(myArray[3]).toBeArray();
			expect(myArray[3]).toEqual(['a', 'b']);
			
			expect(_.isObject(myArray[4])).toBe(true);
			expect(myArray[4]).toEqual({ foo: 'bar'});
			
			expect(myArray[5]).toBeFunction();
			expect(myArray[5]()).toEqual(1);
			
			expect(myArray[6]).toBeString();
			expect(myArray[6]).toEqual('foo');
			
			expect(myArray[7]).toBeBoolean();
			expect(myArray[7]).toEqual(false);
		});
			
		it("can be created from a constructor", function () {
		    var myArray = new Array(1, 2, 3);
			expect(myArray).toBeArray();
		});
		
		it("if only one parameter is sent to the constructor, and that value is an integer then it will be used to set up the length of the array", function () {
		    var myArray = new Array(10);
			expect(myArray.length).toEqual(10);
		});
		
		it("if only one parameter is sent to the constructor, and that value is not an integer then it will be used to set the value of the first element", function () {
			
			var myArray = new Array('11');
			expect(myArray.length).toEqual(1);
			expect(myArray[0]).toEqual('11');
			expect(myArray).toEqual(['11']);

			var myArray2 = new Array('ten');
			expect(myArray2.length).toEqual(1);
			expect(myArray2[0]).toEqual('ten');
			expect(myArray2).toEqual(['ten']);
		});
		
		it("can be created as a literal", function () {
		    var myArray = [1, 2, 3];
			expect(myArray).toBeArray();
		});
		
		it("a value can be added to an array at any index. Any indexes before it that have not been assigned values are assigned with undefined values", function () {
		    
			var myArray = [1, 2, 3];
			myArray[6] = 7;
			
			expect(myArray.length).toEqual(7);
			expect(myArray).toEqual([1, 2, 3, undefined, undefined, undefined, 7]);
		
		});
		
		it("the delete operator can be used to remove elements from an object - but does not change the length property", function () {
		    var myArray = [1, 2, 3];
			expect(myArray).toEqual([1, 2, 3]);
			expect(myArray.length).toEqual(3);
			
			
			delete myArray[0];
			expect(myArray).toEqual([undefined, 2, 3]);
			expect(myArray.length).toEqual(3);
			
			delete myArray[2];
			expect(myArray).toEqual([undefined, 2, undefined]);
			expect(myArray.length).toEqual(3);
		
		});
	
		it("are passed around by reference (they are not copied)", function () {
		    var myArray = [1, 2, 3],
				myArray2 = myArray;
			
			myArray.push(4);
			expect(myArray2).toEqual([1,2,3,4]);
		});
		
		it("are only equal if they reference the same array", function () {
		    var myArray = [1, 2, 3],
				myArray2 = [1, 2, 3];
			
			expect(myArray == myArray2).toBe(false);	
			expect(myArray === myArray2).toBe(false);
		});
	
		it("are objects", function () {
		  	var myArray = new Array(10);
			expect(_.isObject(myArray)).toBe(true);
		});
	
	
		it("return the string 'object' from the typeof operator", function () {
	        var myArray = ['node', 'base', 'rhino'];

			expect(typeof myArray).toEqual('object');
	    });
	
		it("properties can be added to an array", function () {
		    var myArray = [1, 2, 3];
			myArray.foo = 'bar';
			
			expect(myArray.foo).toBeDefined();
			expect(myArray.foo).toEqual('bar');
		});
		
		it("functions can be added to an array", function () {
		    var myArray = [1, 2, , undefined, undefined, 3, undefined, null, 'foo'],
				myArray2 = [1, undefined, 3];
				
			myArray.getDefinedValueCount = function() {
				var count = null,
					i,
					len = this.length;
				
				for (i = 0; i < len; i = i + 1) {
					if (this[i] !== undefined) {
						count = count + 1;
					}
				}
				
				return count;
			};
			
			expect(myArray.getDefinedValueCount).toBeDefined();
			expect(myArray.getDefinedValueCount()).toEqual(5);
			
			expect(myArray2.getDefinedValueCount).not.toBeDefined();
		});
		
		it("methods and properties can be added to all array instances by augmenting Array.protoype", function () {
		    
			var myArray = [1, 2, undefined, 3],
				myArray2 = [1, undefined, undefined, 'foo'];
				
			Array.prototype.isAnArray = true;
			expect(myArray.isAnArray).toBeDefined();
			expect(myArray.isAnArray).toEqual(true);
			
			expect(myArray2.isAnArray).toBeDefined();
			expect(myArray2.isAnArray).toEqual(true);
			
			
			Array.prototype.getDefinedValueCount = function() {
				var count = null,
					i,
					len = this.length;
				
				for (i = 0; i < len; i = i + 1) {
					if (this[i] !== undefined) {
						count = count + 1;
					}
				}
				
				return count;
			}
			
			expect(myArray.getDefinedValueCount).toBeDefined();
			expect(myArray.getDefinedValueCount()).toEqual(3);
			
			expect(myArray2.getDefinedValueCount).toBeDefined();
			expect(myArray2.getDefinedValueCount()).toEqual(2);	
		});
		
		it("multidimensional arrays are created by nesting arrays and are accessed by bracket chaining", function () {
		    
			var multiArray = [],
				multiArray2 = [];

			multiArray[0] = [0, 1, 2, 3, 4];
			multiArray[1] = [10, 11, 12, 13, 14];
			multiArray[2] = [20, 21, 22, 23, 24];
			multiArray[3] = [30, 31, 32, 33, 34];
			
			expect(multiArray[1][1]).toEqual(11);
			expect(multiArray[3][3]).toEqual(33);
			
			multiArray2 = [[['foo']]];
			expect(multiArray2[0][0][0]).toEqual('foo');
		});
	});

	describe("PROPERTIES", function () {
	    describe("length", function () {
			it("every array has a length property", function () {
			    var myArray = [1, 2, 3];
				expect(myArray.length).toBeDefined();
			});
		
			it("the value of length is the largest integar property in the array plus one", function () {
				var myArray = ['node', 'base', 'rhino'],
					myArray2 = [ , , , , 'foo'],
					myArray3 = [],
					myArray4 = [],
					myArray5 = [];
					
				myArray4[3];			// length will be zero as no value set
				myArray5[3] = 'foo';	// length will be 2 as
					
				
				expect(myArray.length).toEqual(3);
				expect(myArray2.length).toEqual(5);
				expect(myArray3.length).toEqual(0);
				
				expect(myArray4.length).toEqual(0);	
				expect(myArray4).toEqual([]);
				
				expect(myArray5.length).toEqual(4);
				expect(myArray5).toEqual([undefined, undefined, undefined, 'foo']);
				expect(myArray5[2]).toBeUndefined();
				expect(myArray5[3]).toBeDefined();
	 		});
	
			it("making the length smaller will delete all properties with a subscript that is greater than or equal to the new length", function () {
			    var myArray = [1, 2, 3, 4, 5];
				expect(myArray).toEqual([1, 2, 3, 4, 5]);
				
				myArray.length = 3;
				expect(myArray).toEqual([1, 2, 3]);	
			});
			
			it("making the length larger will create properties with a subscript upto the new length. The value of the new properties will be undefined", function () {
			    var myArray = [1, 2, 3];
				expect(myArray).toEqual([1, 2, 3]);	
				
				myArray.length = 5;
				expect(myArray).toEqual([1, 2, 3, undefined, undefined]);	
			});
			
			it("the max length of an array is 4,294,967,295", function () {
			    function createArrayThatIsToBig() {
					var myArray = new Array(4294967296);
				}
					
				expect(createArrayThatIsToBig).toThrow();
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
		describe("Array.prototype.reverse()", function () {
		    
			it("modifies the array by reversing the order of the elements", function () {
				var myArray = [1, 2, 3, 'a', 'b', 'c'];
				
				myArray.reverse();
				expect(myArray).toEqual(['c', 'b', 'a', 3, 2, 1]);
			});
			
			it("returns the array", function () {
			    var myArray = [1, 2, 3, 'a', 'b', 'c'],
					foo = myArray.reverse();
				
				expect(foo).toEqual(['c', 'b', 'a', 3, 2, 1]);
			});
		});
		
		// Array.prototype.shift()
		describe("Array.prototype.shift()", function () {
		    it("removes the first element from an array and returns it", function () {
		        var myArray = [1, 2, 3, 4],
					foo = myArray.shift();
				
				expect(myArray).toEqual([2, 3, 4]);
				expect(foo).toEqual(1);	
		    });
		});
		
		
		// Array.prototype.slice()
		describe("Array.prototype.slice(start, end)", function () {
		    it("makes a shallow copy of a portion of an array", function () {
		        var myArray = [1, 2, 3, 4, 5, 6, 7],
					a = myArray.slice(3),
					b = myArray.slice(2, 5),
					c = myArray.slice(3, 2),
					d = myArray.slice(0),
					e = myArray.slice(6);
					
					expect(a).toEqual([4, 5, 6, 7]);
					expect(b).toEqual([3, 4, 5]);
					expect(c).toEqual([]);
					expect(d).toEqual([1, 2, 3, 4, 5, 6, 7]);
					expect(e).toEqual([7]);		
		    });
		
			it("if no parameters are provide, returns a copy of the full array", function () {
				var myArray = [1, 2, 3, 4, 5, 6, 7],
					a = myArray.slice();
						
				expect(a).toEqual([1, 2, 3, 4, 5, 6, 7]);
					
				// the contents of the 2 arrays are the same
				expect(myArray).toEqual(a); 
					
				// but they are referencing different arrays
				expect(myArray === a).toBe(false);
			});
			
			it("if only 1 parameters is provided, returns an array containing all elements from the start position to the end of the array", function () {
			    var myArray = [1, 2, 3, 4, 5, 6, 7],
					a = myArray.slice(3);
				
				expect(a).toEqual([4, 5, 6, 7]);	
			});
			
			it("if 2 parameters are provided, the returned array contains the element specified by the first argument and all subsequent elements up to, but not including, the second argument ", function () {
			    var myArray = [1, 2, 3, 4, 5, 6, 7],
					a = myArray.slice(3, 6);
				
				expect(a).toEqual([4, 5, 6]);
			
			});
			
			it("if start is greather than or equal to array.length, the result will be a new empty array", function () {
			    var myArray = [1, 2, 3, 4, 5, 6, 7],
					a = myArray.slice(10);
				
				expect(a).toEqual([]);
			});
			
			it("if either arguement is negative it specifies an array element relative to the last element in the array", function () {
			    var myArray = [1, 2, 3, 4, 5, 6, 7],
					a = myArray.slice(-1),
					b = myArray.slice(-3, -1);
				
				expect(a).toEqual([7]);
				expect(b).toEqual([5, 6]);
			});
			
		});
		
		// Array.prototype.sort()
		describe("Array.prototype.sort()", function () {
			it("sorts, in place, the elements of an array, alphabetically", function () {
				var myArray = ['c', 'd', 'b', 'a'];
				
				expect(myArray.sort()).toEqual(['a', 'b', 'c', 'd']);

	 		});
	
			it("sorts numbers incorrectly (as they are cast to strng)", function () {
			    var myArray = [1, 22, 12, 2];
			
				expect(myArray.sort()).not.toEqual([1, 2, 12, 22]);
				expect(myArray.sort()).toEqual([1, 12, 2, 22]);
			});
		});
		
		// Array.prototype.splice()
		describe("Array.prototype.splice(start, deleteCount, items...)", function () {
		    it("removes elements from an array", function () {
		        var myArray = [1, 2, 3, 4, 5];
				myArray.splice(3, 2);
				
				expect(myArray).toEqual([1, 2, 3]);
		    });
		
			it("inserts new elements into an array", function () {
		        var topFiveFilms = ['Jaws', 'Gladiator', 'Porkies', 'Top Gun', 'Thor'];
				
				topFiveFilms.splice(1, 2, 'se7en', 'Big');
				
				expect(topFiveFilms).toEqual(['Jaws', 'se7en', 'Big', 'Top Gun', 'Thor']);
		
		    });
		
			it("returns an array containing the deleted items", function () {
			    var topFiveFilms = ['Jaws', 'Gladiator', 'Porkies', 'Top Gun', 'Thor'],
					unFavourited = topFiveFilms.splice(1, 2, 'se7en', 'Big');
				
				expect(unFavourited).toEqual(['Gladiator', 'Porkies']);
			});
			
			it("the first arguement specifies the array position at which the insertion and/or deletion is to begin. If a second arguement is omitted all subsequent elements are removed.", function () {
			    var myArray = [1, 2, 3, 4, 5];
				myArray.splice(3);
				
				expect(myArray).toEqual([1, 2, 3]);
			});
			
			it("the second argument specifies the number of items that should be deleted from the array", function () {
			    var myArray = [1, 2, 3, 4, 5];
				myArray.splice(1, 2);
				
				expect(myArray).toEqual([1, 4, 5]);
			});
			
			it("any additional arguments are inserted into the array starting at the position specified by the first argument", function () {
			    var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
			
				myArray.splice(4, 4, 'a', 'b');
				expect(myArray).toEqual([1, 2, 3, 4, 'a', 'b', 9, 10]);	
			});
		});
		
		
		// Array.prototype.unshift()
		describe("Array.prototype.unshift(item...)", function () {
		    it("adds an item to the beginning of an array", function () {
		        var myArray = ['red', 'blue'];
				
				myArray.unshift('yellow');
				expect(myArray).toEqual(['yellow', 'red', 'blue']);
		
		    });
		});
	});
	
	describe("EXAMPLES", function () {
	    
		it("sorting integers", function () {
		    var myArray = [1, 22, 12, 2];
			
			myArray.sort(function(a, b) {
				return a - b;
			});
		
			expect(myArray).toEqual([1, 2, 12, 22]);
		});
	});
	
});