import { logMethod, configureMethod } from './method-decorator';
import { logProperty } from './property-decorator';
import { logParameter } from './parameter-decorator';
import { logClass } from './class-decorator';

class JoiningKit {

}

@logClass
class Employee {

    @logProperty
    private firstName: string;
    private lastName: string;

    @logProperty
    private joiningKit: JoiningKit;

    @logProperty
    private age: number;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @logMethod
    @configureMethod({ enumerable: false })
    greet(@logParameter message: string): string {
        return `${this.firstName} ${this.lastName} says: ${message}`;
    }

    getJoiningKit() {
        return this.joiningKit;
    }

    getAge() {
        return this.age;
    }

    setJoiningKit(joiningKit: JoiningKit) {
        return this.joiningKit = joiningKit;
    }
}

const emp = new Employee('Mohan Ram', 'Ratnakumar');
emp.greet('hello');
emp.getJoiningKit();
emp.getAge();
for (let i in emp) {
    console.log(i);
}