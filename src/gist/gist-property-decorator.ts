function logParameter(target: Object, propertyName: string) {

    // property value
    let _val = this[propertyName];

    // property getter method
    const getter = () => {
        console.log(`Get: ${propertyName} => ${_val}`);
        return _val;
    };

    // property setter method
    const setter = newVal => {
        console.log(`Set: ${propertyName} => ${newVal}`);
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

class Employee {

    @logParameter
    name: string;

}

const emp = new Employee();
emp.name = 'Mohan Ram';
console.log(emp.name);
// Set: name => Mohan Ram
// Get: name => Mohan Ram
// Mohan Ram