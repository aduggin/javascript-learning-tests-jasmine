describe("Document", function () {
    it("is an object", function () {
		expect(typeof document).toEqual('object');
    });
	
	describe("nodeType", function () {
		
		it("returns a number", function () {
			expect(typeof document.nodeType).toEqual('number');
			expect(document.nodeType).toEqual(9);
        });
    });
});