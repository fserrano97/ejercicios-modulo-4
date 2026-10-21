import { useState } from "react";
import "./Boton.css";
const Boton = () => {
  const [cambiarColor, setCambiarColor] = useState(false);
  return (
    <>
      <div className="container-act1">
        <div className={cambiarColor ? "clase-si-true" : "clase-si-false"}>
          
        </div>
        <button className="button-color" onClick={() => setCambiarColor(!cambiarColor)}>
        Cambiar color
      </button>
      </div>
      
    </>
  );
};

export default Boton;
