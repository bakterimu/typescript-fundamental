import { process } from '../src/union-type';

describe('Union type', () => {
    it('should return union type', () => {
        expect(process('test')).toBe('TEST');
        expect(process(2)).toBe(4);
        expect(process(true)).toBe(false);
    });
});
