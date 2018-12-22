
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log('decorator - sets the enumeration part of the accessor');
        descriptor.enumerable = value;
    };
}

class Employee {
    private _salary: number;
    private _name: string;

    @enumerable(false)
    get salary() { return `Rs. ${this._salary}`; }

    set salary(salary: any) { this._salary = +salary; }

    @enumerable(true)
    get name() {
        return `Sir/Madam, ${this._name}`;
    }

    set name(name: string) {
        this._name = name;
    }

}

const emp = new Employee();
emp.salary = 1000;
for (let prop in emp) {
    console.log(`enumerable property = ${prop}`);
}
// salary property - will not be part of enumeration since we configured it to false
// output:
// decorator - sets the enumeration part of the accessor
// decorator - sets the enumeration part of the accessor
// enumerable property = _salary
// enumerable property = name
