test('should support null and undefined', () => {
    const sayHello = (name?: string | null): void => {
        if (name) console.log(`Hello, ${name}`);
        else console.log('Hello');
    };

    sayHello('ijar');
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
});
