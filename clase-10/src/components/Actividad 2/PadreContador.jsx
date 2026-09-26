import { useState } from "react";
import BotonSumar from "./BotonSumar";
import BotonRestar from "./BotonRestar";
import MostrarContador from "./MostrarContador";
const PadreContador = () => {
  const [contador, setContador] = useState(0);
  return (
    <>
      <BotonSumar setContador={setContador} />
      <MostrarContador contador={contador} />
      <BotonRestar setContador={setContador} />
    </>
  );
};

export default PadreContador;
