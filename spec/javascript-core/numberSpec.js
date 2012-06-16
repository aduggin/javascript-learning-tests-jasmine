/*jslint    sloppy: true, nomen:true  */
/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray, _, console*/

describe("Numbers", function () {

    describe("OVERVIEW", function () {

        it("use number literals rather than number objects as number literals are passed by value whereas number objects are passed by reference", function () {

            var a = 10,
                b = a,
                c = 10,
                aa = new Number(10),
                bb = aa,
                cc = new Number(10);

            // number literals passed by value
            expect(a === b).toBe(true);
            expect(a === c).toBe(true);

            a = 20;
            expect(a === b).toBe(false); // no longer true, b has stayed as 10
            expect(b === 10).toBe(true);

            // number object passed by value
            expect(aa === bb).toBe(true);
            expect(aa === cc).toBe(false); // same values but not referencing the same object - so false
            expect(aa.valueOf() === cc.valueOf()).toBe(true);
        });


        it("number literals return the string 'number' from the typeof operator", function () {
            var numberLiteral = 10;

            expect(typeof numberLiteral).toEqual('number');
            expect(typeof 10).toEqual('number');
        });


        it("there is no seperate integer type so 1 is equal to 1.0", function () {
            expect(1).toEqual(1.0);
        });

        it("decimal fractions are approximate", function () {
			// example provided in a Douglas Crockfard video
            var a = 0.1,
                b = 0.2,
                c = 0.3;

            expect((a + b) + c === a + (b + c)).toEqual(false);
        });

        it("properties cannot be added directly to a number literal", function () {
            var numberObject = new Number(5),
                numberLiteral = 10;

            numberLiteral.isEven = true;
            expect(numberLiteral.isEven).not.toBeDefined();

            // but you can to a number created from a constructor
            numberObject.isEven = false;
            expect(numberObject.isEven).toBeDefined();

        });

        it("methods can be called on a number literal as javascript temporarily converts it into an object", function () {
            var num = 10;

            expect(num.toString()).toEqual('10');
            expect((20).toString()).toEqual('20');

        });

        it("all numbers inherit from Number.prototype", function () {
            var evenNumber = 10,
                oddNumber = 7;

			Number.prototype.isEven = function () {
                return (this.valueOf() % 2 === 0);
            };

            expect(evenNumber.isEven()).toEqual(true);
            expect(oddNumber.isEven()).toEqual(false);

        });

		describe("Numbers are first class objects", function () {
		    
			// A number can be stored in a varible
			
			// A number can be passed as a parameter
			
			// A number can be returned from a function
			
			// A number can be stored in an object
		
		});

    });

    describe("METHODS", function () {
        describe("Number.prototype.toFixed(fractionDigits)", function () {
            it("returns the string representation of a number .", function () {

                var num = 1.123456,
                    foo = num.toFixed(2);

                expect(num).toEqual(1.123456);
                expect(typeof foo).toBe('string');
                expect(foo).toEqual('1.12');

            });

            it("the optional parameters controls the number of decimal places. The default is 0", function () {
                var num = 1.123456;
                expect(num.toFixed()).toEqual('1');
                expect(num.toFixed(1)).toEqual('1.1');
                expect(num.toFixed(3)).toEqual('1.123');
            });

            it("rounds the returned value", function () {
                expect((9.99999).toFixed(2)).toEqual('10.00');
            });

        });

        describe("Number.prototype.toPrecision(precision)", function () {
            it("returns the string representation of a number .", function () {

                var num = 1.123456,
                    foo = num.toPrecision(2);

                expect(num).toEqual(1.123456);
                expect(typeof foo).toBe('string');
                expect(foo).toEqual('1.1');

            });

            it("the optional parameters controls the number of digits of precision.", function () {
                var num = 1.123456;
                expect(num.toPrecision()).toEqual('1.123456');
                expect(num.toPrecision(1)).toEqual('1');
                expect(num.toPrecision(3)).toEqual('1.12');
            });

            it("rounds the returned value", function () {
                expect((9.99999).toPrecision(2)).toEqual('10');
            });
        });

        describe("Number.prototype.toString()", function () {
            it("returns this number as a string", function () {
                var num = 100.12345;

                expect(num.toString()).toEqual('100.12345');
                expect(num.toString()).toBeString();
            });
        });

		describe("EXAMPLES", function () {
			// accurately work with decimals, for emample money, by turning them into whole numbers
		});

    });
});