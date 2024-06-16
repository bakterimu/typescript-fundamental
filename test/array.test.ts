describe('Array', () => {
    it('should support array', () => {
        const names: (string | number)[] = ['ijar', 'budi', 'pratama', 11];

        console.info(names[0]);
        console.info(names[1]);
        console.info(names[2]);
        console.info(names[3]);

        names.push('andi');
        // names.push(3);
        names[1] = 'ratna';
        names[2] = 12;
        console.info(names[1]);
        console.info(names[2]);
    });

    it('should support readonly array', () => {
        const hobbies: ReadonlyArray<string | boolean> = ['budi', 'ijar', true];
        console.info(hobbies[0]);
        console.info(hobbies[1]);
        console.info(hobbies[2]);

        // hobbies[2] = 11;
        // hobbies[2] = false //readonly

        const hobbiesReadonly: readonly number[] = [100, 1];
        // hobbiesReadonly[0] = 1;
        //hobbiesReadonly.push //function push not found
        console.info(hobbiesReadonly[0]);
    });

    it('should support tuple', () => {});
});
