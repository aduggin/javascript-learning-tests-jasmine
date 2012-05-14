/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent  */
/*jslint    sloppy: true  */

describe("Jasmine", function () {

    describe("built-in matchers", function () {
        //http://pivotal.github.com/jasmine/jsdoc/symbols/jasmine.Matchers.html

        describe("expect(x).toBe(expected)", function () {

            var array1 = [1, 2, 3],
                array2 = array1,
                array3 = [1, 2, 3],
                object1 = {'colour' : 'red'},
                object2 = object1,
                object3 = {'colour' : 'red'};

            it("passes if the expected item is the exact same object as the  actual item", function () {
                expect(array2).toBe(array1);
                expect(array3).not.toBe(array1);

                expect(object2).toBe(object1);
                expect(object3).not.toBe(object1);
            });
        });

        describe("expect(x).toBeCloseTo(expected, precision)", function () {
            it("passes if the expected item is equal to the actual item up to a given level of decimal precision", function () {
                expect(1.223).toBeCloseTo(1.22);
                expect(1.23326).toBeCloseTo(1.23324, 3);

                expect(1.233).not.toBeCloseTo(1.22);
            });
        });

        describe("expect(x).toBeDefined()", function () {
            it("passes if x is not undefined", function () {

                var dog = { bark: function () {} };

                expect(dog.bark).toBeDefined();
                expect(dog.purr).not.toBeDefined();

                expect({}).toBeDefined();
                expect(undefined).not.toBeDefined();

            });
        });

        describe("expect(x).toBeFalsy()", function () {
            it("passes if x evaluates to true", function () {
                expect(false).toBeFalsy();
                expect(0).toBeFalsy();
                expect('').toBeFalsy();
                expect(true).not.toBeFalsy();
            });
        });

        describe("expect(x).toBeGreaterThan(y)", function () {
            it("passes if x is greater than y", function () {
                expect(2).toBeGreaterThan(1);
                expect(2).not.toBeGreaterThan(3);
            });
        });

        describe("expect(x).toBeLessThan(y)", function () {
            it("passes if x is less than y", function () {
                expect(1).toBeLessThan(2);
                expect(2).not.toBeLessThan(1);
            });
        });

        describe("expect(x).toBeNull()", function () {
            it("passes if x is null", function () {
                expect(null).toBeNull();
                expect(undefined).not.toBeNull();
                expect({}).not.toBeNull();
            });
        });

        describe("expect(x).toBeTruthy()", function () {
            it("passes if x evaluates to true", function () {
                expect(true).toBeTruthy();
                expect(1).toBeTruthy();
                expect('foo').toBeTruthy();
                expect(false).not.toBeTruthy();
            });
        });

        describe("expect(x).toBeUndefined()", function () {
            it("passes if x is undefined", function () {
                var dog = { bark: function () {} };

                expect(dog.purr).toBeUndefined();
                expect(dog.bark).not.toBeUndefined();

                expect(undefined).toBeUndefined();
                expect({}).not.toBeUndefined();
            });
        });

        describe("expect(x).toContain(y)", function () {
            it("passes if array or string x contains y", function () {
                expect([1, 2, 3]).toContain(2);
                expect('John and Sam').toContain('John');

                expect([1, 2, 3]).not.toContain(4);
                expect('John and Sam').not.toContain('Ian');
            });
        });

        describe("expect(x).toEqual(y)", function () {
            it("compares objects or primitives x and y and passes if they are equivalent", function () {
                expect(1).toEqual(1);
                expect('one').toEqual('one');
                expect('[1,2,3]').toEqual('[1,2,3]');
                expect("{name:'John'}").toEqual("{name:'John'}");

                expect('one').not.toEqual('two');
            });
        });

        describe("expect(myJasmineSpy).toHaveBeenCalled()", function () {
            it("verifies if a function has been called", function () {

                var person = {
                    firstname: 'John',
                    surname: 'Smith',
                    age: 25,
                    getGreeting: function () {
                        return 'hello';
                    },
                    getName: function () {
                        return this.firstname;
                    },
                    getFullName: function () {
                        return this.firstname + ' ' + this.surname;
                    },
                    getAge: function () {
                        return this.age;
                    }
                };

                //EXAMPLE 1: demonstrate toHaveBeenCalled() verifies if a function been called without actually calling the function
                spyOn(person, 'getGreeting');
                expect(person.getGreeting()).not.toBe('hello'); // 'hello' NOT returned as function not actually called

                person.getGreeting();
                expect(person.getGreeting).toHaveBeenCalled();

                //EXAMPLE 2: demonstrate andCallThrough() lets you call the actual function
                spyOn(person, 'getName').andCallThrough();
                expect(person.getName()).toBe('John');  // 'John' returned as have used andCallThrough()

                person.getName();
                expect(person.getName).toHaveBeenCalled();

                //EXAMPLE 3: demonstrate andReturn() lets you return a specified value instead of calling the actual function
                spyOn(person, 'getFullName').andReturn('Mr J R Smith');
                expect(person.getFullName()).toBe('Mr J R Smith');
                expect(person.getFullName()).not.toBe('John Smith');

                person.getFullName();
                expect(person.getFullName).toHaveBeenCalled();

                //EXAMPLE 4: demonstrate andCallFake() lets you return your own function instead of calling the actual function
                spyOn(person, 'getAge').andCallFake(function () {
                    return 6 * 5;
                });
                expect(person.getAge()).toBe(30);

                person.getAge();
                expect(person.getAge).toHaveBeenCalled();
            });
        });

        describe("expect(myJasmineSpy).toHaveBeenCalledWith('foo', 'bar')", function () {
            it("verifies if a function has been called with expected arguments", function () {

                var myObj = {
                    doSomething: function (something) {
                        return something;
                    },
                    doSomethingTwiceAsBig: function (something) {
                        return this.doSomething(something * 2);
                    }
                };

                spyOn(myObj, 'doSomething');
                myObj.doSomethingTwiceAsBig(50);
                expect(myObj.doSomething).toHaveBeenCalledWith(100);

            });
        });

        describe("expect(x).toMatch(pattern)", function () {
            it("compares x to a string of regular expression pattern and passes if they match", function () {
                expect('waterloo').toMatch('waterloo');
                expect('Hello Jasmine').toMatch(/jasmine/i);
                expect('phone: 123-45-67').toMatch(/\d{3}-\d{2}-\d{2}/);
            });
        });

        describe("expect(x).toThrow(expected)", function () {
            it("passes if the expected exception was thrown", function () {
                var object = {
                        doSomething: function () {
                            throw new Error("Unexpected error!");
                        }
                    };
                expect(object.doSomething).toThrow(new Error("Unexpected error!"));
            });
        });
    });

    describe("jasmine-jquery matchers", function () {
        //https://github.com/velesin/jasmine-jquery

        describe("expect(elem).toBe(selector)", function () {
            it("passes if the element matches the specified selector", function () {
                var elem = $('<div id="container"></div>');
                expect(elem).toBe('div');
                expect(elem).toBe('#container');
                expect(elem).toBe('div#container');
            });
        });

        describe("expect(elem).toBeChecked()", function () {
            it("passes if the element is checked", function () {
                var elem = $('<input type="checkbox" checked="checked"/>'),
                    elem2 = $('<input type="checkbox"/>');

                expect(elem).toBeChecked();
                expect(elem2).not.toBeChecked();
            });
        });

/* overridden by jasmine-underscore.js        
describe("expect(elem).toBeEmpty()", function () {
            it("passes if the element is empty", function () {
                var elem = $('<p></p>'),
                    elem2 = $('<p>hello</p>');

                expect(elem).toBeEmpty();
                expect(elem2).not.toBeEmpty();
            });
        });*/

        describe("expect(elem).toBeHidden()", function () {
            it("passes if the element is hidden", function () {
                setFixtures('<div id="foo" style="display:none">foo</div><div id="bar">bar</div>');

                expect($('#foo')).toBeHidden();
                expect($('#bar')).not.toBeHidden();
            });
        });

        describe("expect(elem).toBeSelected()", function () {
            it("passes if the element is selected", function () {
                var elem = $('<option selected="selected"></option>'),
                    elem2 = $('<option></option>');

                expect(elem).toBeSelected();
                expect(elem2).not.toBeSelected();
            });
        });

        describe("expect(elem).toBeVisible()", function () {
            it("passes if the element is visible", function () {
                setFixtures('<span id="foo">foo</span><span id="bar" style="display:none;">bar</span>');

                expect($('#foo')).toBeVisible();
                expect($('#bar')).not.toBeVisible();
            });
        });

        describe("expect(elem).toContain()", function () {
            it("passes if the element contains elements that match the specified selector", function () {
                var elem = $('<div><span class="foo">foo</span></div>');
                expect(elem).toContain('span');
                expect(elem).toContain('.foo');
                expect(elem).toContain('span.foo');
            });
        });

        describe("expect(elem).toExist()", function () {
            it("passes if the element exisits in the document", function () {
                setFixtures('<div id="foo">hello</div>');
                var elem = $('div#foo');
                expect(elem).toExist();
            });
        });

        describe("expect(elem).toHaveAttr()", function () {
            it("passes if the element's attribute matches", function () {
                var elem = $('<div data-country="jamaica">Usain Bolt</div>');
                expect(elem).toHaveAttr('data-country');
                expect(elem).toHaveAttr('data-country', 'jamaica');
            });
        });

        describe("expect(elem).toHaveProp()", function () {
            it("passes of the element's propertt matches", function () {
                setFixtures('<input id="check1" type="checkbox" checked="checked">');
                var elem = $('#check1');
                expect(elem).toHaveProp('checked');
            });
        });

        describe("expect(event).toHaveBeenTriggeredOn(elem)", function () {
            it("passes if the event is triggered on the specified element", function () {

                setFixtures('<button id="show"/>');
                var clicked,
                    elem = $('button#show').click(function () {
                        clicked = true;
                    });
                spyOnEvent(elem, 'click');
                elem.click();
                expect('click').toHaveBeenTriggeredOn(elem);

            });
        });

        describe("expect(event).toHaveBeenPreventedOn(elem)", function () {
            it("passes if the default event has been prevented on the specified element", function () {

                setFixtures('<button id="show"/>');
                var clicked,
                    elem = $('button#show').click(function (event) {
                        event.preventDefault();
                        clicked = true;
                    });
                spyOnEvent(elem, 'click');
                elem.click();
                expect('click').toHaveBeenPreventedOn(elem);

            });
        });

        describe("expect(elem).toHaveClass(className)", function () {
            it("passes if the element has a specified className", function () {
                var elem = $('<div class="some-class"></div>');
                expect(elem).toHaveClass("some-class");
            });
        });

        describe("expect(elem).toHaveData()", function () {
            it("passes if the data of the element matches", function () {
                var elem = $('<div data-country="jamaica">Usain Bolt</div>');
                expect(elem).toHaveData('country');
                expect(elem).toHaveData('country', 'jamaica');
            });
        });

        describe("expect(elem).toHaveHtml()", function () {
            it("pass if HTML contents of the element matches", function () {
                var elem = $('<div id="foo"><span>bar</span><span>foo</span></div>');
                expect(elem).toHaveHtml('<span>bar</span><span>foo</span>');
                expect(elem).not.toHaveHtml('<span>bar</span>');
            });
        });

        describe("expect(elem).toHaveId(id)", function () {
            it("passes if the element has a specified id", function () {
                var elem = $('<div id="foo"></div>');
                expect(elem).toHaveId("foo");
            });
        });

        describe("expect(elem).toHaveText()", function () {
            it("passes if elements combined text content matches the specified text", function () {

                var elem = $('<div><span>Hello World</span></div>'),
                    elem2 = $('<div><span>Hello World</span> Today</div>');

                expect(elem).toHaveText('Hello World');
                expect(elem).not.toHaveText('Hello');

                expect(elem2).toHaveText('Hello World Today');
                expect(elem2).not.toHaveText('Hello World');

            });
        });

        describe("expect(elem).toHaveValue()", function () {
            it("passes if an element has a specified value", function () {
                var elem = $('<input type="text" value="blue"/>');
                expect(elem).toHaveValue('blue');
                expect(elem).not.toHaveValue('red');
            });
        });

        describe("expect(elem).toBeDisabled()", function () {
            it("passes if an element is disabled", function () {

                var elem = $('<input type="submit" disabled="disabled"/>'),
                    elem2 = $('<input type="submit" />');

                expect(elem).toBeDisabled();
                expect(elem2).not.toBeDisabled();
            });
        });

        describe("expect(elem).toBeFocused()", function () {
            it("passes if an element has focus", function () {

                setFixtures('<button id="submit"/>');

                var submitBtn = $('#submit'),
                    resetBtn = $('#reset');

                submitBtn.focus();

                expect(submitBtn).toBeFocused();
                expect(resetBtn).not.toBeFocused();

            });
        });

        describe("expect(elem).toHandle(eventName)", function () {
            it("passes if the specifed event type has been attached to the element", function () {

                setFixtures('<form id="myForm"><input type="text"/><input type="submit" /></form>');
                var form = $('#myForm').bind('submit', function () {
                    return 'submitted';
                });

                expect(form).toHandle("submit");

            });
        });

        describe("expect(elem).toHandleWith(eventName, eventHandler)", function () {
            it("passes if the specifed event type and handler have been attached to the element", function () {

                setFixtures('<form id="myForm"><input type="text"/><input type="submit" /></form>');

                function doSomething() {
                    return 'something';
                }
                function doSomethingElse() {
                    return 'something else';
                }
                var form = $('#myForm').bind('submit', doSomething);

                expect(form).toHandleWith("submit", doSomething);
                expect(form).not.toHandleWith("submit", doSomethingElse);

            });
        });
    });

	describe("jasmine-underscore matchers", function () {

		describe("expect(x).toBeEmpty();", function () {
			it("passes if x is empty", function () {
				expect([]).toBeEmpty();
				expect([1]).not.toBeEmpty();
			});
		});
/*
            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });
            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });

            describe("expect(x).INSERT();", function () {
                it("passes if ", function () {
                    expect().INSERT();
                    expect().not.INSERT();
                });
            });
*/
    });
});