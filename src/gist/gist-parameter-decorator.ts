function logParameter(target: Object, propertyName: string, index: number) {

    // generate metadatakey for the respective method
    // to hold the position of the decorated parameters
    const metadataKey = `log_${propertyName}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}

class Employee {
    greet(@logParameter message: string): string {
        return `hello ${message}`;
    }
}
const emp = new Employee();
emp.greet('hello');
