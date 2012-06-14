/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray  */
/*jslint	sloppy: true  */
describe("Boolean", function () {
    describe("OVERVIEW", function () {
        it("returns the string 'boolean' from the typeof operator", function () {
	        expect(typeof true).toEqual('boolean');
			expect(typeof false).toEqual('boolean');

			expect(typeof 'false').not.toEqual('boolean');
			expect(typeof 'false').toEqual('string');
	    });
    });
	
	describe("Logical Operators", function () {
		it("negation converts a boolean to it's opposite value", function () {
		    expect(!true).toEqual(false);
			expect(!false).toEqual(true);

			expect(!1).toEqual(false);
			expect(!0).toEqual(true);
		});

		it("use double negation to convert any value to its boolean equivalent", function () {
			//true
			expect(!!true).toEqual(true);
			expect(!!'foo').toEqual(true);
			expect(!!{}).toEqual(true);
			expect(!!function(){}).toEqual(true);
			expect(!!1).toEqual(true);
			expect(!!10).toEqual(true);

			//false
			expect(!!false).toEqual(false);
			expect(!!'').toEqual(false);
			expect(!!null).toEqual(false);
			expect(!!undefined).toEqual(false);
			expect(!!0).toEqual(false);
			expect(!!NaN).toEqual(false);
		});

		it("when using OR, the result is true if at least one operand is true", function () {
		    expect(true || true).toEqual(true);
			expect(true || false).toEqual(true);
			expect(false || true).toEqual(true);
			expect(false || false).toEqual(false);
		});

		it("when using AND, the result is true if all operands are true", function () {
		    expect(true && true).toEqual(true);
			expect(true && false).toEqual(false);
			expect(false && true).toEqual(false);
		});
	});
	
	describe("Lazy Evaluation", function () {
	    
		it("as soon as a result is clear any further operation is not performed", function () {
	        var b = 5;
			expect(true || (b = 6)).toEqual(true);
			expect(b).toEqual(5); // (b = 6) was not performed
			
			var b = 5;
			expect(false || (b = 6)).toEqual(6);
			expect(b).toEqual(6); // (b = 6) was performed
	    });
	});
});