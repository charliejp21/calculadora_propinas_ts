export type Product = {

    id: number,
    name: string,
    price: number

}

export type OrderItem = Product & {

    quantity: number
    
}