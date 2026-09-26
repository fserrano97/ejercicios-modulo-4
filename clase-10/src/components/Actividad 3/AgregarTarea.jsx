import { useState } from "react";

const AgregarTarea = ({ setTareas }) => {
  const [nuevaTarea, setNuevaTarea] = useState("");
  return (
    <div>
      <input
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button
        onClick={() =>{
          setTareas((tareas) => [
            ...tareas,
            {
              id: Date.now(),
              texto: nuevaTarea,
            },
          ])
          setNuevaTarea("")
        }}
      >
        Agregar Tarea
      </button>
    </div>
  );
};

export default AgregarTarea;
