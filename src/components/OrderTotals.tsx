import { useCallback } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {

    order: OrderItem[],
    propina: number,
    placeOrder: () => void

}
export default function OrderTotals({order, propina, placeOrder}: OrderTotalsProps) {

    const subTotalAmonut = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const propinaAmount = useCallback(() => subTotalAmonut() * propina , [propina, order])

    const totalAmount = useCallback(() => subTotalAmonut() + propinaAmount() , [propina, order])
    
  return (
    <>
    <div className="space-y-3">

        <h2 className="font-black text-2xl">Totales y propina:</h2>

        <p>Subtotal a pagar:

            <span className="font-bold">{formatCurrency(subTotalAmonut())}</span>

        </p>

        <p>Propina:

            <span className="font-bold">{formatCurrency(propinaAmount())}</span>

        </p>

        <p>Total a pagar:

            <span className="font-bold">{formatCurrency(totalAmount())}</span>

        </p>

    </div>
    <button className="m-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10" disabled={totalAmount() === 0} onClick={placeOrder}>
        Guardar orden
    </button>
    </>
  )
}

