import "./Tareas.css"
import { useState } from "react";

const Tareas = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState([]);

  return (
    <>
      <div className="container-tarea">
        <div className="container-agregar-tarea">
          <input
            type="text"
            placeholder="Escribir tarea"
            maxLength={30}
            value={tarea}
            className="input-estilo"
            onChange={(e) => setTarea(e.target.value)}
          />
          <button
            className="boton-tareas"
            onClick={() => {
              setTareas([...tareas, tarea]);
              setTarea("");
            }}
          >
            Agregar
          </button>
        </div>
        <div>
          <div className="container-lista">
            <h4 className="titulo-tareas">LISTA DE TAREAS</h4>
            <div className="lista-tareas">
              <ul>
                {tareas.map((tarea) => (
                  <li>{tarea}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tareas;
