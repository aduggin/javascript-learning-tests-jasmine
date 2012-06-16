/*jslint    sloppy: true, nomen:true  */
/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray, _, console*/

describe("NaN", function () {
    it("is a number value that is the result of an operation that cannot produce a normal result", function () {		
		expect((1 + 1 + undefined)).toBeNaN();	//NaN
		expect((1 + 1 * 'a')).toBeNaN();		//NaN
		expect((1 + 1 + 'a')).not.toBeNaN(); 	// 2a
    });

	it("is not equal to any value including itself", function () {
	    expect(NaN === NaN).toEqual(false);
	});
	
	it("can be detected with the isNaN(num) function", function () {
	    expect(isNaN((1 + 1 + undefined))).toBe(true);
	});
	
});