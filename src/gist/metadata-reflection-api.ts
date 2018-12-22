import "reflect-metadata";

// parameter decorator uses reflect api to store the indexes of the decorated parameter
export function logParameter(target: Object, propertyName: string, index: number) {
    const indices = Reflect.getMetadata(`log_${propertyName}_parameters`, target, propertyName) || [];
    indices.push(index);
    Reflect.defineMetadata(`log_${propertyName}_parameters`, indices, target, propertyName);
}

// property decorator uses reflect api to get the run time type of the property
export function logProperty(target: Object, propertyName: string): void {
    var t = Reflect.getMetadata("design:type", target, propertyName);
    console.log(`${propertyName} type: ${t.name}`);
}


class Employee {

    @logProperty
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    greet(@logParameter message: string): string {
        return `${this.name} says: ${message}`;
    }

}