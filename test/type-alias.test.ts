import { Category, Product } from '../src/type-alias';

describe('Type Alias', () => {
    it('should support alias', () => {
        const category: Category = {
            id: '1',
            name: 'ijar',
        };

        const product: Product = {
            id: 2,
            name: 'ipon',
            price: 1000,
            category: category,
        };

        console.info(product);
    });
});
