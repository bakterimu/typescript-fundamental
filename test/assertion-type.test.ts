import { Seller } from '../src/interface-obj';

test('should support assertion type', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const person: any = {
        name: 'ijar',
        age: 20,
    };

    const person2 = person as Seller;

    console.info(person2);
    // console.info(person2.sayHello('ijar'));
});
