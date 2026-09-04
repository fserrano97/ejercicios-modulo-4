import "./App.css";
import ListaProductos from "./components/ListaProductos";
import "./index.css";
import Perfil from "./components/Perfil";
import { productos, usuario, tareas, listaAlumnas } from "./data/data";
import ListaAlumnas from "./components/ListaAlumnas";


function App() {
  return (
    <>
    
      <ListaProductos productos={productos} />
      <Perfil usuario={usuario} />
      <div className="container-tareas">
        <h1 className="titulo-tareas">Tareas pendientes:</h1>
        {tareas.map((tarea) =>
          tarea.completada === false ? (
            <ul className="tareas" key={tarea.id}>
              <li>{tarea.nombre}</li>
            </ul>
          ) : null,
        )}
        {tareas.every((tarea) => tarea.completada === true) && (
          <p className="tareas-completadas">"No hay tareas pendientes"</p>
        )}
      </div>
      <ListaAlumnas alumnas={listaAlumnas} />



    </>
  );
}
export default App;
