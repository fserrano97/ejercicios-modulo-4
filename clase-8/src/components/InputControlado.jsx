
import { useState } from "react"

const InputControlado = () => {
    const [texto, setTexto] = useState("")
  return (
    <>

    <div>
  
        <input type="text" value={texto} placeholder="Escribe algo" onChange={(e)=> setTexto(e.target.value)} />
        <p>{texto}</p>
    </div>

    </>
  )
}

export default InputControlado;