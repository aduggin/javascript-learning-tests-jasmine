/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray  */
/*jslint	sloppy: true  */

describe("underscore.js", function () {

	describe("Collections", function () {
		//each
		describe("_.each(list, iterator, [context])", function () {
		    it("Iterates over a list of elements, yielding each in turn to an iterator function.", function () {
		        var myArray = [1, 2, 3, 4, 5];
				myArray.sum = 0;

				_.each(myArray, function(num) {
					myArray.sum = myArray.sum + num
				}, myArray)

				expect(myArray.sum ).toEqual(15);
		    });
		});
	
	/*
	Collections
	    - map
	    - reduce
	    - reduceRight
	    - find
	    - filter
	    - reject
	    - all
	    - any
	    - include
	    - invoke
	    - pluck
	    - max
	    - min
	    - sortBy
	    - groupBy
	    - sortedIndex
	    - shuffle
	    - toArray
	    - size	
	*/
	});
	
	describe("Arrays", function () {
	
	
	/*
	Arrays

	    - first
	    - initial
	    - last
	    - rest
	    - compact
	    - flatten
	    - without
	    - union
	    - intersection
	    - difference
	    - uniq
	    - zip
	    - indexOf
	    - lastIndexOf
	    - range	
	*/
	});
	
	describe("Functions", function () {
	
	
	/*
	Functions

	    - bind
	    - bindAll
	    - memoize
	    - delay
	    - defer
	    - throttle
	    - debounce
	    - once
	    - after
	    - wrap
	    - compose	
	*/
	});
	
	describe("Objects", function () {
	
	
	/*
	Objects

	    - keys
	    - values
	    - functions
	    - extend
	    - pick
	    - defaults
	    - clone
	    - tap
	    - has
	    - isEqual
	    - isEmpty
	    - isElement
	    - isArray
	    - isObject
	    - isArguments
	    - isFunction
	    - isString
	    - isNumber
	    - isFinite
	    - isBoolean
	    - isDate
	    - isRegExp
	    - isNaN
	    - isNull
	    - isUndefined	
	*/
	});
	
	describe("Utility", function () {
	
	
	/*
	Utility

	    - noConflict
	    - identity
	    - times
	    - mixin
	    - uniqueId
	    - escape
	    - result
	    - template	
	*/
	});
	
	describe("Chaining", function () {
	
	
	/*
	Chaining

	    - chain
	    - value	
	*/
	});	
});