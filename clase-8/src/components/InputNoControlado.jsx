import { useRef } from "react";

const InputNoControlado = () => {
  const inputRef= useRef();
  return (
    <div>
      <input type="text" ref={inputRef}  />
      <button onClick={() => alert(inputRef.current.value)}>Mostrar valor</button>
    </div>
  );
};

export default InputNoControlado;
