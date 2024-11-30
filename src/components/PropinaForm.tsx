
import { Dispatch, SetStateAction } from "react"

const propinaOptions = [

    {
     id: 'tip-10',
     value: .10,
     label: '10%'
    },
    {
     id: 'tip-20',
     value: .20,
     label: '20%'
    },{
     id: 'tip-30',
     value: .30,
     label: '30%'
    }
]

type PropinaFormProps = {

    setPropina: Dispatch<SetStateAction<number>>,
    propina: number
}

export default function PropinaForm({setPropina, propina}: PropinaFormProps) {

  return (

    <div>

        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {propinaOptions.map(propinaOption => (

                <div key={propinaOption.id} className="flex gap-2">

                    <label htmlFor={propinaOption.id}>{propinaOption.label}</label>
                    <input 
                     id={propinaOption.id} 
                     type="radio" 
                     name="propina"
                     value={propinaOption.value}
                     onChange={e => setPropina(+e.target.value)} 
                     checked={propinaOption.value === propina}/>

                </div>
            ))}
        
        </form>

    </div>
  )
}
