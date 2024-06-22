describe('Functions', () => {
    it('should support rest parameter', () => {
        const printName = (...name: string[]) => {
            name.forEach((element) => {
                console.log(element);
            });
        };

        printName('ijar', 'budi');
    });

    it('should support optional parameter', () => {
        const printName = (firstName: string, lastName?: string): string => {
            return lastName
                ? `Hello ${firstName} ${lastName}`
                : `Hello ${firstName}`;
        };

        console.info(printName('budi'));
        console.info(printName('budi', 'doremi'));
    });

    it('should support overloading function', () => {
        function fn(name: string): string;
        function fn(value: number): number;

        function fn(param: string | number): string | number | undefined {
            if (typeof param === 'string') {
                return `Hello ${param}`;
            } else if (typeof param === 'number') {
                return param + 1;
            }
        }

        expect(fn('ijar')).toBe('Hello ijar');
        expect(fn(1)).toBe(2);
    });

    it('should support function as parameter', () => {
        const printName = (name: string, util: (name: string) => string) => {
            return `Hello ${util(name)}`;
        };

        expect(
            printName('ijar', (name) => {
                return name.toLocaleUpperCase();
            }),
        ).toBe('Hello IJAR');
    });
});
