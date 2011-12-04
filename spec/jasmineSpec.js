describe("Jasmine", function () {
    describe( "expect(x).toEqual(y)", function () {
		
		it("compares objects or primitives x and y and passes if they are equivalent", function () {
			expect(1).toEqual(1);
			expect('one').toEqual('one');
			expect('[1,2,3]').toEqual('[1,2,3]');
			expect("{name:'John'}").toEqual("{name:'John'}");
        });
    });
});