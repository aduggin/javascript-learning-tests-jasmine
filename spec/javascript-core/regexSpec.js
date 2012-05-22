/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray  */
/*jslint	sloppy: true  */
describe("Regular Expressions", function () {

	describe("OVERVIEW", function () {
	    it("returns the string 'object' from the typeof operator", function () {
	        var regEx = /foo/i;
			expect(typeof regEx).toEqual('object');
	    });
	});


	describe("PROPERTIES", function () {
	    describe("global", function () {
			it('Whether the RegEx has the "g" attribute', function () {
				var regEx = /foo/i;
				expect(regEx.global).toEqual(false);
			});
		});
		
		describe("ignoreCase", function () {
			it('Whether the RegEx has the "i" attribute', function () {
				var regEx = /foo/i;
				expect(regEx.ignoreCase).toEqual(true);
			});
		});
		
		/*
		describe("lastIndex", function () {
		    
		});
		
		describe("multiLine", function () {
		    
		});
		
		describe("source", function () {
		    
		});
		*/
	});
	
	describe("METHODS", function () {
		describe("exec()", function () {
			
		    it("Performs powerful, general-purpose pattern matching", function () {
				var result = /foo/.exec("foo");
				expect(result[0]).toBe('foo');
		    });
		
			it("Returns an array of matched string", function () {
			    var result = /foo/.exec("foo");
			
				expect(typeof result).toEqual('object');
				expect(result).toBeArray();
				expect(result[0]).toBe('foo');
			});
		
		});
		
		describe("test()", function () {
			it("Tests whether a string contains a pattern", function () {
				expect(/^foo$/.test("foo")).toBeTruthy();
			});
			
			it("Returns a boolean, true when there is a match, false otherwise", function () {
			    expect(/foo/.test("foo")).toEqual(true);
				expect(/foo/.test("ofoo")).toEqual(true);
				expect(/foo/.test("fool")).toEqual(true);
				expect(/foo$/.test("fool")).toEqual(false);
				expect(/^foo/.test("fool")).toEqual(true);
				expect(/^foo/.test("ofool")).toEqual(false);
			});
		});
	});
});