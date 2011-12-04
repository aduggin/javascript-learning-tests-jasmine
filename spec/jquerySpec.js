describe("jQuery", function () {
    describe( "$.inArray()", function () {
		
		beforeEach(function() {
			myArray = ['node', 'base', 'rhino'];
		});
		
        it("searches for a specified value within an array and return its index", function () {
			expect($.inArray('node', myArray)).toEqual(0);
			expect($.inArray('base', myArray)).toEqual(1);
			expect($.inArray('rhino', myArray)).toEqual(2);
        });
		
		it("returns -1 if value is not found", function () {
			expect($.inArray('jasmine', myArray)).toEqual(-1);
        });
    });
});