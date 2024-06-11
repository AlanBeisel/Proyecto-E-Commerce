import { Product } from "../interfaces/IProduct"


export async function getProductsDB() {
    try {
        const res = await fetch('http://localhost:3001/products', {
            method: 'GET',
            next: {revalidate: 3600}
        })
        const products: Product[] = await res.json()
        return products
    } catch (error: any) {
        throw new Error(error)
        
    }
}


export async function getProductById(id : string) {
    try {
        const products = await getProductsDB();
        const product = products.find((product) => product.id.toString() === id)
        if(!product) throw new Error('Product not found')
            return product;        
    } catch (error: any) {
        throw new Error(error)
        
    }
}

