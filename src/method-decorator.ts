import "reflect-metadata";

export function configureMethod(
    { enumerable = true, configurable = true, writable = true }: { [key: string]: boolean }
) {
    return function (
        target: Object,
        propertyName: string,
        propertyDesciptor: PropertyDescriptor
    ): PropertyDescriptor {
        propertyDesciptor.enumerable = enumerable;
        propertyDesciptor.configurable = configurable;
        propertyDesciptor.writable = writable;
        console.log(propertyDesciptor);
        return propertyDesciptor;
    }
}
export function logMethod(
    target: Object,
    propertyName: string,
    propertyDesciptor: PropertyDescriptor): PropertyDescriptor {
    // target === Employee.prototype
    // propertyName === "greet"
    // propertyDesciptor === Object.getOwnPropertyDescriptor(Employee.prototype, "greet")
    const method = propertyDesciptor.value;

    propertyDesciptor.value = function (...args: any[]) {

        //const indices = Reflect.getMetadata(`log_${propertyName}_parameters`, target, propertyName);
        const indices = target[`log_${propertyName}_parameters`];
        if (Array.isArray(indices)) {
            args.forEach((arg, index) => {
                if (indices.indexOf(index) !== -1) {
                    var argStr = JSON.stringify(arg) || arg.toString();
                    console.log(`logged parameters arg[${index}]: ${argStr}`);
                }
            });
        }
        // convert list of foo arguments to string
        const params = args.map(a => JSON.stringify(a)).join();

        // invoke foo() and get its return value
        const result = method.apply(this, args);

        // convert result to string
        const r = JSON.stringify(result);

        // display in console the function call details
        console.log(`Call: ${propertyName}(${params}) => ${r}`);

        // return the result of invoking the method
        return result;
    }
    return propertyDesciptor;
};
