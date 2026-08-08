import Titulo from "./Titulo.jsx"
import Boton from "./Boton.jsx"
import Descripcion from "./Descripcion.jsx"
import './Perfil.css'

const perfil = () => {
    return  (
        <div className="perfil">
            <Titulo />
            <Descripcion />
            <Boton />
        </div>
    )
}

export default perfil