/*jslint    sloppy: true, nomen:true  */
/*global  describe, beforeEach, it, expect, spyOn, $, setFixtures, alert, spyOnEvent, myArray, _, console*/

/*
    http://underscorejs.org/
    http://underscorejs.org/docs/underscore.html
    http://underscorejs.org/test/test.html
    
    http://net.tutsplus.com/tutorials/javascript-ajax/getting-cozy-with-underscore-js/
    
    http://sugarjs.com/libs/Underscore
*/

describe("underscore.js", function () {

    describe("Collections", function () {
        /*
        Collections
        - each          Iterates over a list of elements, yielding each in turn to an iterator function.
        - map           Creates a new array by using the return value of a mapping function on each element.
        - reduce        Boils down a list of values to a single value, optionally with a starting value.
        - reduceRight   Boils down a list of values to a single value starting from the last entry (the right), optionally with a starting value.
        - find          Finds the first value in the list for which the iterator returns true.
        - filter        Finds all values in the list for which the iterator returns true.
        - reject        Returns all elements in the list for which the iterator does not return true. Opposite of filter.
        - all           Returns true if the iterator returns true for all elements in the list, false otherwise.
        - any           Returns true if the iterator returns true for any elements in the list, false otherwise.
        - include       Returns true if the value is present in the list.
        - invoke        Calls the passed method name for each value in the list.
        - pluck         Returns the property for each value in the list.
        - max           Returns the maximum value in the list.
        - min           Returns the minimum value in the list.
        - sortBy        Returns a copy of the list sorted by the result of the iterator.
        - groupBy       Splits a collection into sets, grouping them by the result of running each value through the iterator.
        - sortedIndex   Determine the index at which the value should be inserted into the list in order to maintain the sorted order.
        - shuffle       Returns a randomized copy of the list.
        - toArray       Converts any enumerable object into an array.
        - size          Returns the number of values in the list.

        https://github.com/andrewplummer/Sugar/blob/2ca87917d119fbc6a0507e3a151741137efdd8f3/unit_tests/environments/underscore/tests/collections.js
        */
    
    
        //each    Iterates over an enumerable collection.
        describe("_.each(list, iterator, [context])", function () {
            /*          
                * iterates over a list of elements (arrays and objects), yielding each in turn to an iterator function
                * the first argument passed to the iterator function is the value of the array item or object property
                * the optional second argument passed to the iterator function is the current items array index or object property name
                * the optional third argument passed to the iterator is a reference to the original collection
                * iterating over objects ignores the object prototype
                * aliases to forEach    
                * WHAT HAPPENS WHEN ITERATNG OVER null, undefined, number, string?  
            */
        
            it("iterates over a list of elements, yielding each in turn to an iterator function.", function () {
                var myArray = [1, 2, 3, 4, 5],
                    foo = []

                // example using functional style
                _.each(myArray, function (num) {
                    foo.push(num);
                });
                expect(foo).toEqual([1, 2, 3, 4, 5]);
            });

            it("each iterator provides a value and iteration count", function () {
                var myArray = [10, 20, 30, 40, 50],
                    store = [];

                _.each(myArray, function (value, key) {
                    store.push(value + key);
                });

                expect(store).toEqual([10, 21, 32, 43, 54]);
            });

            it("iterates over arrays", function () {
                var myArray = [10, 20, 30, 40, 50],
                    arrayValues = [],
                    arrayIndexes = [];
                    
                _.each(myArray, function(value, key) {
                    arrayValues.push(value);
                    arrayIndexes.push(key);
                });
                
                expect(arrayValues).toEqual([10, 20, 30, 40, 50]);
                expect(arrayIndexes).toEqual([0, 1, 2, 3, 4]);
            });

            it("iterates over objects", function () {
                var myObj = {
                    first: 10,
                    second: 20,
                    third: 30,
                    fourth: 40,
                    fifth: 50
                },
                    propertyNames = [],
                    propertyValues = [];
                
                _.each(myObj, function (value, key) {
                    propertyValues.push(value);
                    propertyNames.push(key);
                });
                
                expect(propertyValues).toEqual([10, 20, 30, 40, 50]);
                expect(propertyNames).toEqual(['first', 'second', 'third', 'fourth', 'fifth']);
            });

            it("can be used as an OO style method", function () {
                var myArray = [1, 2, 3, 4, 5],
                    bar = [];

                _(myArray).each(function (num) {
                    bar.push(num);
                });
                expect(bar).toEqual([1, 2, 3, 4, 5]);
            });
        });
    });

    describe("Arrays", function () {
    /*
    Arrays
    - first         Returns the first element(s) of the array.
    - initial       Returns all but the last n entries of the array.
    - last          Returns the last n entries of the array.
    - rest          Returns the rest of the entries from a given index.
    - compact       Returns a copy of the array with all falsy values removed.
    - flatten       Flattens a nested array.
    - without       Returns a copy of the array with all instances of the values passed removed.
    - union         Computes the union of the arrays, or the unique items present in all arrays.
    - intersection  Computes the intersection of the arrays, or the values that are common to all arrays.
    - difference    Returns the values in the array that are not present in the others.
    - uniq          Returns a duplicate-free version of the array.
    - zip           Merges together multiple arrays, creating a multi-dimensional array as the result.
    - indexOf       Returns the index of the first value that matches in the array or -1 if not present.
    - lastIndexOf   Returns the index of the last value that matches in the array or -1 if not present.
    - range         Shortcut to quickly create lists of integers.
        
    https://github.com/andrewplummer/Sugar/blob/2ca87917d119fbc6a0507e3a151741137efdd8f3/unit_tests/environments/underscore/tests/arrays.js
    */

    });

    describe("Functions", function () {
    /*
    Functions
    - bind      Binds an object to a function, making that object its "this" argument when called.
    - bindAll   Binds a number of methods on the object.
    - memoize   Memoizes a given function by caching the computed result. Useful for speeding up slow-running computations.
    - delay     Invokes the function after n milliseconds.
    - defer     Invokes the function after the current stack has cleared.
    - throttle  Creates a throttled version of the function that when invoked will only call the function at most once per n milliseconds. Useful for rate-limiting events.
    - debounce  Returns a "debounced" version of the function that will only execute once after n milliseconds have passed.
    - once      Returns a version of the function that will return the value of the original call if called repeated times.
    - after     Returns a version of the function that will only be run after being called n times.
    - wrap      Wraps the first function inside of the wrapper function, passing it as the first argument.
    - compose   Returns the composition of a list of functions.

    https://github.com/andrewplummer/Sugar/blob/2ca87917d119fbc6a0507e3a151741137efdd8f3/unit_tests/environments/underscore/tests/functions.js
    */

    });

    describe("Objects", function () {
    /*
    Objects
    - keys          Retrieves all the names of an object's properties.
    - values        Retrieves all the values of an object's properties.
    - functions     Returns a sorted list of every method in the object.
    - extend        Copies all of the properties of the source object to the destination.
    - pick          Return a copy of the object, filtered to only have values for the whitelisted keys (or array of valid keys). 
    - defaults      Fills in missing properties in the object with default values.
    - clone         Creates a shallow clone of the object.
    - tap           Invokes interceptor with the object, and then returns object. The primary purpose of this method is to "tap into" a method chain, in order to perform operations on intermediate results within the chain.
    - has           Returns true if the object contains the given key
    - isEqual       Performs a deep comparison between two objects to determine if they are equal.
    - isEmpty       Returns true if object contains no values. 
    - isElement     Returns true if the object is a DOM element.
    - isArray       Returns true if the object is an array.
    - isObject      Returns true if the object is an object.
    - isArguments   Returns true if the object is an Arguments object.
    - isFunction    Returns true if the object is a function.
    - isString      Returns true if the object is a string.
    - isNumber      Returns true if the object is a number or NaN.
    - isFinite      Returns true if object is a finite Number.
    - isBoolean     Returns true if the object is a boolean.
    - isDate        Returns true if the object is a date.
    - isRegExp      Returns true if the object is a RegExp.
    - isNaN         Returns true if the object is NaN.
    - isNull        Returns true if the object is null.
    - isUndefined   Returns true if the object is undefined.

    https://github.com/andrewplummer/Sugar/blob/2ca87917d119fbc6a0507e3a151741137efdd8f3/unit_tests/environments/underscore/tests/objects.js
    */

    });

    describe("Utility", function () {
    /*
    Utility
    - noConflict    Give control of the "_" variable back to its previous owner. Returns a reference to the Underscore object.
    - identity      Returns the same value that is used as the argument.
    - times         Invokes the passed iterator n times.
    - mixin         Allows you to extend Underscore with your own utility functions.
    - uniqueId      Generate a globally-unique id for client-side models or DOM elements that need one.
    - escape        Escapes a string for insertion into HTML, replacing &, <, >, ", ', and / characters. 
    - result        If the value of the named property is a function then invoke it; otherwise, return it.
    - template      Compiles Javascript templates into functions that can be evaluated for rendering.

    https://github.com/andrewplummer/Sugar/blob/2ca87917d119fbc6a0507e3a151741137efdd8f3/unit_tests/environments/underscore/tests/utility.js
    */

    });

    describe("Chaining", function () {
    /*
    Chaining
    - chain     Returns a wrapped object. Calling methods on this object will continue to return wrapped objects until value is used. 
    - value     Extracts the value of a wrapped object. 

    https://github.com/andrewplummer/Sugar/blob/2ca87917d119fbc6a0507e3a151741137efdd8f3/unit_tests/environments/underscore/tests/chaining.js
    */

    });
});