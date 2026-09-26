import { useState } from "react";
import MostrarMensaje from "./MostrarMensaje";

const InputMensaje = ({ texto, setMensaje }) => {
  const [mostrar, setMostrar] = useState(false);

  return (
    <div>
      <input
        type="text"
        placeholder="Escribe un mensaje"
        value={texto}
        onChange={(e) => setMensaje(e.target.value)}
      />

      <button onClick={() => setMostrar(true)}>
        Mostrar
      </button>

      {mostrar && <MostrarMensaje texto={texto} />}
    </div>
  );
};

export default InputMensaje;