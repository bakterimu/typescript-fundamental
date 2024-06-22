export enum CustomerType {
    REGULAR = 'REGULAR',
    GOLD = 'GOLD',
    PLATINUM = 'PLATINUM',
}

export type Customer = {
    name: string;
    age: number;
    type: CustomerType;
};
