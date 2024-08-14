import { useState } from "react"
import type { OrderItem, Dish } from "../types"

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = ( item : Dish) => {

        console.log(item)
    }

    return{
        addItem
    }
}