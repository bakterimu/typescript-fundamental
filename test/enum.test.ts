import { Customer, CustomerType } from '../src/enum';

describe('Enum', () => {
    it('should support enum', () => {
        const person: Customer = {
            name: 'ijar',
            age: 100,
            type: CustomerType.GOLD,
        };

        console.info(person);
    });
});
