/*global  describe, beforeEach, afterEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, location, history  */
/*jslint	sloppy: true  */

describe("History", function () {
	var url;
	beforeEach(function () {
	    url = location.pathname;
	});

	afterEach(function () {
	    history.replaceState(null, null, url);
	});

	describe("OVERVIEW", function () {
	    it("is defined", function () {
	        expect(history).toBeDefined();
	    });

		it("is an object", function () {
			expect(typeof history).toEqual('object');
	    });
	});

	describe("back()", function () {
	    it("is defined", function () {
            expect(history.back).toBeDefined();
			expect(history.back).toBeTruthy();
        });
		it("is a function", function () {
			expect(typeof history.back).toEqual('function');
	    });
	});

	describe("forward()", function () {
	    it("is defined", function () {
            expect(history.forward).toBeDefined();
			expect(history.forward).toBeTruthy();
        });
		it("is a function", function () {
			expect(typeof history.forward).toEqual('function');
	    });
	});

	describe("go()", function () {
	    it("is defined", function () {
            expect(history.go).toBeDefined();
			expect(history.go).toBeTruthy();
        });
		it("is a function", function () {
			expect(typeof history.go).toEqual('function');
	    });
	});

	describe("pushState()", function () {
        it("is defined", function () {
            expect(history.pushState).toBeDefined();
			expect(history.pushState).toBeTruthy();
        });
		it("is a function", function () {
			expect(typeof history.pushState).toEqual('function');
	    });
		it("adds a new entry to the window's browsing history, storing a structured clone of data,"
			+ "as well as a specified title and url", function () {
				var data = {
					foo: 'bar'
				},
					title = 'This is a page title',
					url = '/my/url';
				history.pushState(data, title, url);
				expect(location.pathname).toEqual(url);
			});
    });

	describe("replaceState()", function () {
        it("is defined", function () {
            expect(history.replaceState).toBeDefined();
        });
		it("is a function", function () {
			expect(typeof history.replaceState).toEqual('function');
	    });
		it("replaces the current entry in the window's browsing history, storing a structured clone of data,"
			+ "as well as a specified title and url", function () {
				var data = {
					foo: 'bar'
				},
					title = 'This is a page title',
					url = '/my/url/replacestate';
				history.replaceState(data, title, url);
				expect(location.pathname).toEqual(url);
			});
    });
});