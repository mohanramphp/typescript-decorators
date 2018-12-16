import "reflect-metadata";

export function logParameter(target: Object, propertyName: string, index: number) {
    const metadataKey = `log_${propertyName}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
    /* const indices = Reflect.getMetadata(`log_${propertyName}_parameters`, target, propertyName) || [];
    indices.push(index);
    Reflect.defineMetadata(`log_${propertyName}_parameters`, indices, target, propertyName); */
}