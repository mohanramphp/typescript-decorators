import "reflect-metadata";

export function logProperty(target: Object, propertyName: string): void {
    var t = Reflect.getMetadata("design:type", target, propertyName);
    console.log(`${propertyName} type: ${t.name}`);
}
