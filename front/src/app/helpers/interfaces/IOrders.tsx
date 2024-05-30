


export interface Order {
    id: number;
    products: Product[];
}

export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}