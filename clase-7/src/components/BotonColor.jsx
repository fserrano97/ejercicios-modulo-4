import { useState } from "react";
import "./botonColor.css"


const BotonColor = () => {
  const [cambio, setCambio] = useState(true);
  return (
    <>
      <div className="container-boton-color">
        <p className={cambio ? "texto-verde" : "texto-rojo" }>
          Practicando useState!
        </p>
        <button className="boton-color" onClick={() => setCambio(!cambio)}>Cambiar color</button>
      </div>
    </>
  );
};

export default BotonColor;
