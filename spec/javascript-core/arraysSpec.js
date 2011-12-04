describe("Arrays", function () {
	beforeEach(function() {
		myArray = ['node', 'base', 'rhino'];
	});
	
    it("returns the string 'object' from the typeof operator", function () {
		expect(typeof myArray).toEqual('object');
 	});
	
	describe("length", function () {
		it("specifies the number of elements", function () {
			expect(myArray.length).toEqual(3);
 		});
	});
});