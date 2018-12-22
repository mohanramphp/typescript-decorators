import { logClass } from './class-decorator';
import { logMethod } from './method-decorator';
import { logProperty } from './property-decorator';
import { logParameter } from './parameter-decorator';

export function log(...args) {
    switch (args.length) {
        case 3:
            if (typeof args[2] === "number") {
                return logParameter.apply(this, args);
            }
            return logMethod.apply(this, args);
        case 2:
            return logProperty.apply(this, args);
        case 1:
            return logClass.apply(this, args);
        default:
            throw new Error('Not a valid decorator');
    }
}

@log
class Employee {

    @log
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    @log
    greet(@log message: string): string {
        return `${this.name} says: ${message}`;
    }

}