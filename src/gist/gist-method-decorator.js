"use strict";
var __decorate = (this && this.__decorate) ||
    function (decorators, target, key, desc) {
        // function argument length
        var c = arguments.length

        /**
         * manipulating the result
         * if - only the array of decorators and target is passed
         * then - it should be an class decorator
         * else - if the descriptor (4th argument) is null
         * then - preparing the property descriptor with known values
         * otherwise - use same descriptor
         */

        var r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc;

        // declaring this variable to hold the decorator
        var d;

        // if - native reflection part is available use that to trigger the decorators
        // else - fallback
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") {
            r = Reflect.decorate(decorators, target, key, desc)
        }
        else {
            // iterating through the decorators from right to left
            for (var i = decorators.length - 1; i >= 0; i--) {
                //if - decorator is valid assign to d
                if (d = decorators[i]) {
                    /**
                     * if - only the array of decorators and target is passed
                     * then - it should be an class decorator - call the decorator by passing target
                     * else - if all 4 arguments are there then its method decorator and call correspondingly
                     * if argument passed is 3, then probably its property descriptor and call correspondingly
                     * no condition satisfied - return the manipulated result
                    */
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r
                }
            }
        };

        /**
         * since only the method decorator need to redefine its property with applied decorator result.
         * finally returning manipulated r
         */
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

exports.__esModule = true;
function logMethod(target, propertyName, propertyDesciptor) {
    // target === Employee.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
    var method = propertyDesciptor.value;
    propertyDesciptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        // convert list of greet arguments to string
        var params = args.map(function (a) { return JSON.stringify(a); }).join();
        // invoke greet() and get its return value
        var result = method.apply(this, args);
        // convert result to string
        var r = JSON.stringify(result);
        // display in console the function call details
        console.log("Call: " + propertyName + "(" + params + ") => " + r);
        // return the result of invoking the method
        return result;
    };
    return propertyDesciptor;
}
exports.logMethod = logMethod;
;
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Employee.prototype.greet = function (message) {
        return this.firstName + " " + this.lastName + " says: " + message;
    };

    // typescript calls helper `__decorate`
    // to apply the decorator on the object's prototype
    __decorate([
        logMethod
    ], Employee.prototype, "greet");
    return Employee;
}());
var emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello');
