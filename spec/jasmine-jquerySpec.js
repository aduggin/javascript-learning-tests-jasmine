describe("jasmine-jquery", function () {
    describe( "toHaveClass(className)", function () {	
		it("should check if an element has a specified className", function () {
			expect($('<div class="some-class"></div>')).toHaveClass("some-class");
        });
    });
	
	describe( "toHaveId(id)", function () {	
		it("should check if an element has a specified id", function () {
			expect($('<div id="some-id"></div>')).toHaveId("some-id");
        });
    });
});