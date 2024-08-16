import type { Product} from "../types"

type MenuItemProps = {

    item: Product
    addItem: (item : Product) => void 
    
}

export const MenuItem = ({item, addItem}: MenuItemProps) => {
  return (
    <button 
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-5"
      onClick={()=>addItem(item)}>
    <p>{item.name}</p>
    <p className="font-black">${item.price}</p>
    </button>
  )
}
