import { useState } from "react"
import type { OrderItem, MenuItem } from "../types"

export default function useOrder(){

    const [order, setOrder] = useState<OrderItem[]>([])

    const [propina, setPropina] = useState(0)

    const addItem = (item: MenuItem) => {

        const itemExists = order.find(orderItem => orderItem.id === item.id )

        if(itemExists){

            const updatedOrder = order.map(orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem)

            setOrder(updatedOrder)

        }else{

            const newItem = {...item, quantity: 1 }

            setOrder([...order, newItem])

        }

    }

    const removeItem = (id: MenuItem['id']) => {

        setOrder(order.filter(item => item.id !== id))

    }

    return{
        
        order,
        propina,
        setPropina,
        addItem,
        removeItem
    }
}