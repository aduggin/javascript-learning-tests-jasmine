/*jslint    sloppy: true, nomen:true  */
/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray, _, console*/

describe("Objects", function () {

    describe("OVERVIEW", function () {
        it("are a dynamic collection of properties - like an associative array", function () {
            var person = {
                age: 36,
                name: 'Alistair',
                getName: function () {
                    return this.name;
                }
            };
            person.name = "Al";

            expect(person.name).toEqual("Al");
        });

        it("the value of a property can be any data type (string, number, boolean, array, object, function)", function () {
            var person = {
                name: 'John',
                age: 36,
                isMale: true,
                foo: [1, 2, 3, 4],
                bar: {
                    feet: 2,
                    legs: 2,
                    eyes: 3
                },
                getName: function () {
                    return this.name;
                }
            };

            expect(_.isString(person.name)).toEqual(true);
            expect(_.isNumber(person.age)).toEqual(true);
            expect(_.isBoolean(person.isMale)).toEqual(true);
            expect(_.isArray(person.foo)).toEqual(true);
            expect(_.isObject(person.bar)).toEqual(true);
            expect(_.isFunction(person.getName)).toEqual(true);
        });

        it("every property has a key string that is unique within that object", function () {
            var myObj = {
                foo: 'test',
                foo: 'test2',
                'first name': 'bob'
            };

            expect(myObj.foo).toEqual('test2');
            expect(myObj['first name']).toEqual('bob');
        });

        it("values can be retrieved by wrappig a string expression in a [ ] suffix (bracket notation)", function () {
            var myObj = {
                foo: 'test',
                'first name': 'bob',
                bar2: 'blah'
            };

            expect(myObj['foo']).toEqual('test');
            expect(myObj['first name']).toEqual('bob');
            expect(myObj['bar' + (1 + 1)]).toEqual('blah');
        });

        it("values can be retrieved by . notation if the name is a legal name", function () {
            var myObj = {
                foo: 'test',
                'first name': 'bob', // have to use bracket
                bar2: 'blah'
            };

            expect(myObj.foo).toEqual('test');
            expect(myObj.bar2).toEqual('blah');
        });

        it("undefined is produced if an attempt is made to retrieve a nonexistent member", function () {
            var shirt = {
                size: 'small'
            };

            expect(shirt.height).toBeUndefined();
        });

        it("attempting to retrive values from undefined will throw a TypeError exception", function () {

            function getHandle() {
                var car = {wheel: true},
                    a = car.door.handle;

                return a;
            }

            expect(getHandle).toThrow();
            // webkit and firefox throw different messages
            //expect(getHandle).toThrow('car.door is undefined');
        });

        it("a value in an object can be updated by assigment, at any time", function () {
            var person = {
                age: 32,
                name: 'John'
            };

            expect(person.age).toEqual(32);
            expect(person.name).toEqual('John');

            person.age = 40;
            person.name = 'Bob';

            expect(person.age).toEqual(40);
            expect(person.name).toEqual('Bob');
        });

        it("when a value is assigned to a property name that does not already exist the property is created and value assigned", function () {
            var person = {
                age: 32,
                name: 'John'
            };
            expect(person.sex).toBeUndefined();

            person.sex = 'Male';
            expect(person.sex).toEqual('Male');
        });

        it("properties can be removed by using the delete operator", function () {
            var person = {
                age: 32,
                name: 'John'
            };
            expect(person.name).toEqual('John');

            delete person.name;
            expect(person.name).not.toEqual('John');
            expect(person.name).not.toBeDefined();
        });

        it("are passed by reference. They are never copied", function () {
            var original = {},
                copy = original;

            original.a = 32;
            expect(copy.a).toEqual(32);
        });

        it("comparing objects will only return true if you compare two references to the same object", function () {
            var original = {},
                another = {},
                copy = original;

            expect(original === copy).toBe(true);
            expect(original === another).toEqual(false);
        });

        //@wip

        // JSLINT complains if you use the consturctors
        it("there are 9 native object constructors: Number(), String(), Boolean(), Object(), Array(), Function(), Date(), Error() and Regex(). Object can be created from these using the new operator. JSLint will complain if used to create an string, number, boolean, array, object or function as it is reccomended to use literal notation.", function () {

            function Person(name) {
                this.name = name;
            }

            var myPerson = new Person('Al'),
            //Object
                myObjLiteral = {},
                myObjectContructor = new Object(),
            //Array
                myArrayLiteral = [1, 2],
                myArrayContructor = new Array(1, 2),
            //Function
                myFuncLiteral = function () {},
                myFuncConstuctor = new Function(),
            // Number
                myNumLiteral = 10,
                myNumConstuctor = new Number(10),
            // String
                myStringLiteral = 'foo',
                myStringConstuctor = new String('foo'),
            // Boolean
                myBooleanLiteral = true,
                myBooleanConstuctor = new Boolean(true),
            //RegExp
                myRegexLiteral = /\d{7}/,
                myRegexContructor = new RegExp("\\d{7}", "g");
            // Date
                //myDateLiteral = 10,
            myDateConstuctor = new Date();
            // Error
                //myErrorLiteral = {},
            myErrorConstuctor = new Error();

            expect(typeof myObjLiteral).toEqual('object');
            expect(typeof myObjectContructor).toEqual('object');

            expect(typeof myArrayLiteral).toEqual('object');
            expect(typeof myArrayContructor).toEqual('object');

            expect(typeof myFuncLiteral).toEqual('function');
            expect(typeof myFuncConstuctor).toEqual('function');

            expect(typeof myNumLiteral).toEqual('number');
            expect(typeof myNumConstuctor).toEqual('object');

            expect(typeof myStringLiteral).toEqual('string');
            expect(typeof myStringConstuctor).toEqual('object');

            expect(typeof myBooleanLiteral).toEqual('boolean');
            expect(typeof myBooleanConstuctor).toEqual('object');

            expect(typeof myRegexLiteral).toEqual('object');
            expect(typeof myRegexContructor).toEqual('object');
            
            expect(typeof myDateConstuctor).toEqual('object');
            
            expect(typeof myErrorConstuctor).toEqual('object');
        });

        it("The host environment provides a global object. In a browser this is called window", function () {

            expect(_.isObject(window)).toEqual(true);
            expect(window.parseInt).toBeDefined();
            expect(window.parseInt('10 boxes')).toEqual(10);

            myVar = 'test';
            expect(window.myVar).toEqual('test');

        });

        it("The Math Object is a static object", function () {

            // demo of static object
            var num = Math.floor(100.12234);
            expect(num).toEqual(100);

        });

        it("The Math Object cannot be used as a constructor function", function () {

            function createMathObject() {
                var myMath = new Math();
                return myMath;
            }

            expect(createMathObject).toThrow();
        });
        
        it("Math's properties are constants so there values can't be changed", function () {
            
            var pi = Math.PI;
            Math.PI = 3.2; // this is ignored
            
            expect(pi).toEqual(3.141592653589793);
            
        });

        it("user defined objects can be created using constructor functions", function () {

            function Person(name, age) {
                this.name = name;
                this.age = age;
            }

            var myPerson = new Person('Bob', 36);

            expect(typeof myPerson).toEqual('object');
            expect(_.isObject(myPerson)).toEqual(true);
            expect(myPerson.name).toEqual('Bob');
            expect(myPerson.age).toEqual(36);
        });


        it("when an object is created it's constructor property is set to reference the constructor object used to create the object", function () {
            function Person(name, age) {
                this.name = name;
                this.age = age;
            }

            var myPerson = new Person('Bob', 36),
                myPerson2 = new Person('Tom', 32);

            expect(myPerson.constructor).toBeDefined();
            expect(_.isObject(myPerson.constructor)).toEqual(true);
            expect(typeof myPerson.constructor).toEqual('function');
            expect(myPerson.constructor === myPerson2.constructor).toEqual(true);
            
            var aPerson = {name:'Ian', age: 27};
            expect(myPerson.constructor === aPerson.constructor).toEqual(false);
        });

        it("the instanceof operator can be used to test if an object was created with a specific constructor", function () {

            function Person(name, age) {
                this.name = name;
                this.age = age;
            }

            var myPerson = new Person('Bob', 36);

            expect(myPerson instanceof Person).toEqual(true);
            expect(myPerson instanceof Object).toEqual(true);

        });

        it("Object is the parent of all Javascript objects. All objects are linked to a Object.protype from which they can inherit properties", function () {

            Object.prototype.foobar = 'hello';

            function Person(name) {
                this.name = name;
            }

            var myPerson = new Person('Al'),
            myObjLiteral = {},
            myArrayLiteral = [1, 2],
            myFuncLiteral = function () {},
            myNumLiteral = 10,
            myStringLiteral = 'foo',
            myBooleanLiteral = true,
            myRegexLiteral = /\d{7}/;

            expect(myPerson.foobar).toEqual('hello');
            expect(myObjLiteral.foobar).toEqual('hello');
            expect(myArrayLiteral.foobar).toEqual('hello');
            expect(myFuncLiteral.foobar).toEqual('hello');
            expect(myNumLiteral.foobar).toEqual('hello');
            expect(myStringLiteral.foobar).toEqual('hello');
            expect(myBooleanLiteral.foobar).toEqual('hello');
            expect(myRegexLiteral.foobar).toEqual('hello');
        });
        
        //@wip - enumerating propertie


        //@wip - hasOwnProperty
    });

    describe("PROPERTIES", function () {

        // Object.constructor
        describe("Object.constructor", function () {
            it("Points back to Object", function () {
                var o = {};
                expect(Object.prototype.constructor === Object).toEqual(true);
                expect(o.constructor === Object).toEqual(true);
            });
        });
        // Object.prototype
        describe("Object.prototype", function () {
            it("An object", function () {
                expect(_.isObject(Object.prototype)).toEqual(true);
            });
            
            it("The prototype of all objects. Anything you add to this prototype will be inherited by all other objects", function () {
                Object.prototype.foobar = 'hello';

                function Person(name) {
                    this.name = name;
                }

                var myPerson = new Person('Al'),
                myObjLiteral = {},
                myArrayLiteral = [1, 2],
                myFuncLiteral = function () {},
                myNumLiteral = 10,
                myStringLiteral = 'foo',
                myBooleanLiteral = true,
                myRegexLiteral = /\d{7}/;

                expect(myPerson.foobar).toEqual('hello');
                expect(myObjLiteral.foobar).toEqual('hello');
                expect(myArrayLiteral.foobar).toEqual('hello');
                expect(myFuncLiteral.foobar).toEqual('hello');
                expect(myNumLiteral.foobar).toEqual('hello');
                expect(myStringLiteral.foobar).toEqual('hello');
                expect(myBooleanLiteral.foobar).toEqual('hello');
                expect(myRegexLiteral.foobar).toEqual('hello');
            });
        });

    });

    describe("METHODS", function () {
        // Object.prototype.hasOwnProperty()
        describe("Object.prototype.hasOwnProperty()", function () {
            it("returns true if a property is an own property of the object if the property doesn't exist or if inherited from the prototype chain", function () {
                
                var myObj  = {
                    a: 'foo'
                }
                
                expect(myObj.hasOwnProperty('a')).toEqual(true);  // property of the object
                expect(myObj.hasOwnProperty('b')).toEqual(false); // property does not exist
                expect(myObj.hasOwnProperty('toString')).toEqual(false); // inherited from the prototype chain
            });
        });
        // Object.prototype.toString()
        describe("Object.prototype.toString()", function () {
            it("returns a string representation of the object", function () {
                
                function Person(name) {
                    this.name = name;
                }

                var myPerson = new Person('Al'),
                myObjLiteral = {},
                myArrayLiteral = [1, 2],
                myFuncLiteral = function () {},
                myNumLiteral = 10,
                myStringLiteral = 'foo',
                myBooleanLiteral = true,
                myRegexLiteral = /\d{7}/;
                
                expect(myPerson.toString()).toEqual('[object Object]');
                expect(myObjLiteral.toString()).toEqual('[object Object]');
                expect(myArrayLiteral.toString()).toEqual('1,2');
                //expect(myFuncLiteral.toString()).toEqual('function () { }'); // doesn't pass
                expect(myNumLiteral.toString()).toEqual('10');
                expect(myStringLiteral.toString()).toEqual('foo');
                expect(myBooleanLiteral.toString()).toEqual('true');
                expect(myRegexLiteral.toString()).toEqual('/\\d{7}/');
                
            });
        });

        // Object.prototype.valueOf()
    });

    describe("EXAMPLES", function () {

    });
});