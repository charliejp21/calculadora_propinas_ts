export type Dish = {

    id: number,
    name: string,
    price: number

}

export type OrderItem = Dish & {

    quantity: number
    
}