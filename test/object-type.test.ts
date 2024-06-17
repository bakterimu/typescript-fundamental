import { ID } from '../src/type-alias';

describe('Object type', () => {
    it('should support obj type', () => {
        const person: { id: ID; name: string; age: number } = {
            id: 1,
            name: 'ijar',
            age: 20,
        };

        console.info(person);
    });
});
