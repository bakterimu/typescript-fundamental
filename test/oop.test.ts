describe('Class', () => {
    it('should support getter setter of properties', () => {
        class Customer {
            constructor(
                private _id: string | number,
                private readonly _name: string,
                private _product: string = 'unknown',
                private _address?: string,
            ) {}

            set id(value: string | number) {
                this._id = value;
            }

            get id() {
                return this._id;
            }

            public print() {
                console.log(this._id, this._name, this._product, this._address);
            }
        }

        const budi: Customer = new Customer(1, 'budi', undefined, 'jl ayani');
        console.info(budi);

        budi.id = '2';
        console.info(budi.id);
    });
});
