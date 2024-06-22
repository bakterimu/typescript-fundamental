export interface Seller {
    id: Id;
    name: string;
    age: number;
    address?: string;
    sayHello(name: string): string;
}

export interface Id {
    id: string | number;
    nik: string;
}
