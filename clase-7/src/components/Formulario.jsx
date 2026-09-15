import { useState } from "react";
import "./Formulario.css";

const Formulario = () => {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [mostrar, setMostrar] = useState(false)
  return (
    <div>
      <div className="container-formulario">
        <div className="formulario">
          <label htmlFor="">Nombre</label>
          <input className="nombre-apellido" 
          type="text" 
          placeholder="Ingresa tu nombre"
          maxLength={15}
           value={nombre} 
           onChange={(e) => {
            setNombre(e.target.value)
            setMostrar(false)
            }}
            />
          <label htmlFor="">Apellido</label>
          <input className="nombre-apellido"
           type="text" 
           placeholder="Ingresa tu apellido" 
           maxLength={15}
           value={apellido} 
           onChange={(e) => {
            setApellido(e.target.value)
            setMostrar(false)
        }}
          />
          
        </div>
        <div className="boton-enviar" onClick={() => setMostrar(true) }>Enviar</div>
        
      </div>
       {mostrar && <div className="notification">
                <p>Hola {nombre} {apellido}! 😊</p>
                <span className="cerrar" onClick={() => setMostrar(false)}>x</span>
            </div>}
     
    </div>
  );
};

export default Formulario;
