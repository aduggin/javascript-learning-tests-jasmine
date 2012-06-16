/*jslint    sloppy: true, nomen:true  */
/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray, _, console*/

describe("String", function () {

	describe("OVERVIEW", function () {
	    it("returns the string 'string' from the typeof operator", function () {
	        var string1 = "some characters",
				string2 = "some characters 1.2345",
				string3 = "1",
				string4 = ""
			expect(typeof string1).toEqual('string');
			expect(typeof string2).toEqual('string');
			expect(typeof string3).toEqual('string');
			expect(typeof string4).toEqual('string');
	    });
		
		it("adding multiple strings togther concatenates them", function () {
		    var s1 = 'one', s2 = 'two';
			expect(s1 + s2).toEqual('onetwo');
		});
		
		it("concatenating an empty string with a number results in a string", function () {
		    var num = 1, string = '', sum = num + string;
			expect(sum).toEqual('1');
			expect(typeof sum).toEqual('string');
		});
	
		
	
	});
/*

	describe("OVERVIEW", function () {
		var s = "some characters";
		expect(typeof s).toEqual('string');
	});

	describe("STATIC METHODS", function () {


		describe("String.fromCharCode()", function () {
		    it("Creates a new string using the character codes passed as arguments", function () {

		    });
		});
	});

	describe("METHODS", function () {
		describe("charAt()", function () {
	        it("Extracts the character at a given position from a string", function () {

	        });
	    });

		describe("charCodeAt()", function () {
		    it("Returns the encoding of the character at a given position in a string", function () {

		    });
		});

		describe("concat()", function () {
		    it("Concatenates one of more values to a string", function () {

		    });
		});

		describe("indexOf", function () {
		    it("Seaches the string for a character or substring", function () {

		    });
		});

		describe("lastIndexOf", function () {
		    it("Searches the string backward for a character or substring", function () {

		    });
		});

		describe("localCompare()", function () {
		    it("Compares strings using local-specific ordering", function () {

		    });
		});

		describe("match()", function () {
		    it("Performs pattern matching with a regular expression", function () {

		    });
		});

		describe("replace()", function () {
		    it("Performs a search-and-replace operation with a regular expression", function () {

		    });
		});

		describe("search()", function () {
		    it("Searches a string for a substring that matches a regular expression", function () {

		    });
		});


		describe("slice()", function () {
		    it("Returns a slice or substring of a string", function () {

		    });
		});

		describe("split()", function () {
		    it("Splits a string into an array of strings, breaking at a specified delimter string or regular expression", function () {

		    });
		});

		describe("substr()", function () {
		    it("Extracts a substring; a variant of substring()", function () {

		    });
		});

		describe("substring()", function () {
		    it("Extracts a substring of a string", function () {

		    });
		});

		describe("toLowerCase()", function () {
		    it("returns a copy of the string, with all characters converted to lowercase", function () {

		    });
		});

		describe("toString()", function () {
		    it("Returns the primitive string value", function () {

		    });
		});

		describe("toUpperCase()", function () {
		    it("Returns a copy of a string, with all the characters converted to Uppercase", function () {

		    });
		});

		describe("trim()", function () {
		    it("Returns a copy of the string, with all characters converted ti uppercase", function () {

		    });
		});

		describe("valueOf()", function () {
		    it("Returns the primitive string value", function () {

		    });
		});

	});
*/
});