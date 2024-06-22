import { Id, Seller } from '../src/interface-obj';

describe('Interface', () => {
    it('should support interface-obj', () => {
        const id: Id = {
            id: 1,
            nik: '123',
        };

        const person: Seller = {
            id: id,
            name: 'ijar',
            age: 20,
            address: 'jl ayani',
            sayHello: (name: string): string => {
                return `Hello, ${name}`;
            },
        };

        console.info(person);
        console.info(person.sayHello('andi'));
    });

    it('should support interface index', () => {
        interface StringArray {
            [index: number]: string;
        }

        const arr: StringArray = ['test', 'test1'];
        console.info(arr);

        interface NumberArray {
            [key: string]: string;
        }

        const arrNumber: NumberArray = {
            test: 'ijar',
            test1: 'bara',
        };

        console.info(arrNumber);
    });

    it('should support interface function', () => {
        interface Calc {
            (value1: number, value2: number): number;
        }

        const add: Calc = (value: number, value2: number): number => {
            return value + value2;
        };

        const add2: Calc = (value: number) => {
            return value++;
        };

        console.info(add(1, 2));
        console.info(add2(1, 2));
    });

    it('should support extends interface', () => {
        interface Employee {
            name: string;
            age: number;
            department: string;
        }

        interface Manager extends Employee {
            numberOfEmployee: number;
        }

        const budi: Manager = {
            name: 'budi',
            age: 20,
            department: 'it',
            numberOfEmployee: 1,
        };

        console.info(budi);
    });

    it('should support intersection', () => {
        interface HasName {
            name: string;
        }

        interface HasId {
            id: number;
        }

        const person: HasName & HasId = {
            id: 1,
            name: 'budi',
        };

        console.info(person);
    });
});
