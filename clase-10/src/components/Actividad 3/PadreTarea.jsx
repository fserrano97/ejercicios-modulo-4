import { useState } from "react";
import AgregarTarea from "./AgregarTarea";
import ListaTareas from "./ListaTareas";



const PadreTarea = () => {
  const [tareas, setTareas] = useState([]);

  function eliminarTarea(id) {
  {
    setTareas((prev) => prev.filter((t) => t.id !== id));
  }
}
  return (
    <div>
      <div>
        <AgregarTarea setTareas={setTareas} />
        <ListaTareas tareas={tareas} setTareas={setTareas} eliminarTarea={eliminarTarea} />
      </div>
    </div>
  );
};

export default PadreTarea;
