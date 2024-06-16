describe('Any', () => {
    it('should support any', () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const person: any = {
            name: 'andy',
            age: 10,
            isAdult: false,
        };
        person.address = 'jl limboto';
        console.info(person);
    });
});
