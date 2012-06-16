/*jslint    sloppy: true, nomen:true  */
/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray, _, console*/

describe("NaN", function () {
    it("is a number value that is the result of an undefined or erroneous operations", function () {		
		expect((1 + 1 + undefined)).toBeNaN();	//NaN
		expect((1 + 1 * 'a')).toBeNaN();		//NaN
		expect((1 + 1 + 'a')).not.toBeNaN(); 	// 2a
    });

	it("is toxic: any arithmetic operation with NaN as an input will have NaN a result", function () {
		expect(1 + NaN).toBeNaN();
		expect(1 + (1 * NaN)).toBeNaN();
	});

	it("is not equal to any value including itself", function () {
	    expect(NaN === NaN).toEqual(false);
		expect(NaN !== NaN).toEqual(true);
	});
	
	it("can be detected with the isNaN(num) function", function () {
	    expect(isNaN((1 + 1 + undefined))).toBe(true);
	});
	
});