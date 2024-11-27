import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalsProps = {

    order: OrderItem[],
    propina: number
}
export default function OrderTotals({order, propina}: OrderTotalsProps) {

    const subTotalAmonut = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const propinaAmount = useMemo(() => subTotalAmonut * propina , [propina, order])

    const totalAmount = useMemo(() => subTotalAmonut + propinaAmount , [propina, order])
    
  return (
    <>
    <div className="space-y-3">

        <h2 className="font-black text-2xl">Totales y propina:</h2>

        <p>Subtotal a pagar:

            <span className="font-bold">{formatCurrency(subTotalAmonut)}</span>

        </p>

        <p>Propina:

            <span className="font-bold">{formatCurrency(propinaAmount)}</span>

        </p>

        <p>Total a pagar:

            <span className="font-bold">{formatCurrency(totalAmount)}</span>

        </p>

    </div>
    <button>

    </button>
    </>
  )
}

