import "./Botones.css";
import { useState } from 'react'

const Botones = () => {
     const [contador, setContador] = useState(0)
  return (
    <div>
      <div className="container-botones">
        <div className="contenedor-botones">
          <div className="botones">
            <button onClick={() => setContador(contador - 1)} className="boton">-</button>
            <span className="contador-estilo">{contador}</span>
            <button onClick={() => setContador(contador + 1)} className="boton">+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Botones;
