import { useState } from "react";

const SoloNumeros = () => {
    const [dato, setDato] = useState("");
  return (
    <>
      <input
        type="text"
        placeholder="Escribe un texto"
        onKeyDown={(e) => {
          if (isNaN(e.key) && e.key !== "Backspace") {
            e.preventDefault();
            setDato("Solo se permiten numeros..")
          } else{
            setDato("")
          }
    
        }}
      />
      <p>{dato}</p>

    </>
  );
};

export default SoloNumeros;
