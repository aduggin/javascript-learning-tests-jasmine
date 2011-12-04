describe("Window", function () {
	
	it("is an object", function () {
		expect(typeof window).toEqual('object');
    });
    
	describe("navigator", function () {
		
		it("is an object", function () {
			expect(typeof window.navigator).toEqual('object');
        });
    });
});