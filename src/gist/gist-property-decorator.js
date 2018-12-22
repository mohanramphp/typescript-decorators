var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logParameter(target, propertyName) {
    // property value
    var _val = this[propertyName];
    // property getter method
    var getter = function () {
        console.log("Get: " + propertyName + " => " + _val);
        return _val;
    };
    // property setter method
    var setter = function (newVal) {
        console.log("Set: " + propertyName + " => " + newVal);
        _val = newVal;
    };
    // Delete property.
    if (delete this[propertyName]) {
        // Create new property with getter and setter
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
var Employee = /** @class */ (function () {
    function Employee() {
    }
    __decorate([
        logParameter
    ], Employee.prototype, "name");
    return Employee;
}());
var emp = new Employee();
emp.name = 'Mohan Ram'; // Set: name => Mohan Ram
console.log(emp.name); // Get: name => Mohan Ram
