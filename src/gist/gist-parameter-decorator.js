var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logParameter(target, propertyName, index) {
    // generate metadatakey for the respective method
    // to hold the position of the decorated parameters
    var metadataKey = "log_" + propertyName + "_parameters";
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Employee.prototype.greet = function (message) {
        return "hello " + message;
    };
    __decorate([
        __param(0, logParameter)
    ], Employee.prototype, "greet");
    return Employee;
}());
var emp = new Employee();
emp.greet('hello');
