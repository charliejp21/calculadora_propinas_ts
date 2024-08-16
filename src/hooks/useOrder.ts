import { useState } from "react"
import type { OrderItem, Product } from "../types"

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([])

    const addItem = ( item : Product) => {

        console.log(item)
    }

    return{
        addItem
    }
}