/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray  */
/*jslint	sloppy: true  */

describe("jQuery", function () {
	describe("Utility functions", function () {
	    describe("$.inArray()", function () {
			var myArray = [];
			beforeEach(function () {
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
	
	describe("jQuery.fn - wrapper functions", function () {
	    describe("$.fn.hide()", function () {
			it("hides the matched element", function () {
				setFixtures('<div id="foo">foo</div><div id="bar">bar</div>');
				var elem = $('#foo'),
					elem2 = $('#bar');
				
				//EXAMPLE 1: element is hidden and display has been set to none
				elem.hide();
				expect(elem).toBeHidden();
				expect(elem.css('display')).toBe('none');
				
				//EXAMPLE 2: a callback is called once the element has been hidden
				var myCallback = jasmine.createSpy();
				elem2.hide(500, myCallback);
				
				waits(600);
				
				runs(function() {
					expect(myCallback).toHaveBeenCalled();
				})
	        });
	    });
	});
});

/*
CREATING ELEMENTS
*/

/*
SELECTING ELEMENTS
*/

/*
ATTRIBUTES
*/

/*
TRAVERSING ELEMENTS
*/

/*
MANIPULATING ELEMENTS
*/

/*
EVENTS
*/

/*
EFFECTS
*/

/*
AJAX
*/

/*
FORMS
*/

/*
UTILITIES
$.ajax()
$.boxModel()
$.browser.version()
$.browser()
$.clearQueue()
$.contains()
$.data()
$.dequeue()
$.each()
$.extend()
$.globalEval()
$.grep()
$.inArray()
$.isArray()
$.isEmptyObject()
$.isFunction()
$.isPlainObject()
$.isXMLDoc()
$.makeArray()
$.map()
$.merge()
$.noop()
$.param()
$.parseJSON()
$.proxy()
$.queue()
$.removeData()
$.trim()
$.unique()
*/