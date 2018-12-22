"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
require("reflect-metadata");
// parameter decorator uses reflect api to store the indexes of the decorated parameter
function logParameter(target, propertyName, index) {
    var indices = Reflect.getMetadata("log_" + propertyName + "_parameters", target, propertyName) || [];
    indices.push(index);
    Reflect.defineMetadata("log_" + propertyName + "_parameters", indices, target, propertyName);
}
exports.logParameter = logParameter;
// property decorator uses reflect api to get the run time type of the property
function logProperty(target, propertyName) {
    var t = Reflect.getMetadata("design:type", target, propertyName);
    console.log(propertyName + " type: " + t.name);
}
exports.logProperty = logProperty;
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.name = name;
    }
    Employee.prototype.greet = function (message) {
        return this.name + " says: " + message;
    };
    __decorate([
        logProperty
    ], Employee.prototype, "name");
    __decorate([
        __param(0, logParameter)
    ], Employee.prototype, "greet");
    return Employee;
}());
