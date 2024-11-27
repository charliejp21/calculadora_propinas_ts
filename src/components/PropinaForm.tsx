
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

    setPropina: Dispatch<SetStateAction<number>>
}

export default function PropinaForm({setPropina}: PropinaFormProps) {

  return (

    <div>

        <h3 className="font-black text-2xl">Propina:</h3>

        <form>
            {propinaOptions.map(propina => (

                <div key={propina.id} className="flex gap-2">

                    <label htmlFor={propina.id}>{propina.label}</label>
                    <input 
                     id={propina.id} 
                     type="radio" 
                     name="propina"
                     value={propina.value}
                     onChange={e => setPropina(+e.target.value)} />

                </div>
            ))}
        
        </form>

    </div>
  )
}
