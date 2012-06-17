/*jslint    sloppy: true, nomen:true  */
/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray, _, console*/

describe("null", function () {
	var myNull;

	beforeEach(function () {
	    myNull = null;
	});

    it("does not inherit from Object.prototype", function () {

		Object.prototype.isTrue = function () {
			return true;
		};

		function accessIsTrue() {
			myNull.isTrue();
		}

		expect(accessIsTrue).toThrow();

    });

	it("a value to indicate nothing", function () {
		expect(myNull).toEqual(null);
	});

	it("return the string 'object' from the typeof operator", function () {
        expect(typeof myNull).toEqual('object');
    });
});