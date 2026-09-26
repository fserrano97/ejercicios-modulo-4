import {useState} from 'react'
import InputMensaje from './InputMensaje.jsx'
const Padre = () => {
    const [mensaje, setMensaje] = useState("")
  return (
    <div>
        <InputMensaje texto={mensaje} setMensaje={setMensaje}/>


    </div>
  )
}

export default Padre