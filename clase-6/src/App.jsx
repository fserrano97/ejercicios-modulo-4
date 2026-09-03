import "./App.css";
import ListaProductos from "./components/ListaProductos";
import "./index.css";
import Perfil from "./components/Perfil";

const productos = [
  { id: 1, nombre: "Leche", precio: 10 },
  { id: 2, nombre: "Pan", precio: 500 },
  { id: 3, nombre: "Huevos", precio: 15 },
  { id: 4, nombre: "Queso", precio: 200 },
  { id: 5, nombre: "Mantequilla", precio: 25 },
];

const estado = {
  activo: "activo",
  inactivo: "inactivo",
  invitado: "invitado",
};

const usuario = { nombre: "Florencia", edad: 28, estado: estado.activo };

const tareas = [
  { id: 1, nombre: "Comprar verduras", completada: true },
  { id: 2, nombre: "Comprar frutas", completada: true },
  { id: 3, nombre: "Limpiar la casa", completada: true },
  { id: 4, nombre: "Hacer ejercicio", completada: true },
  { id: 5, nombre: "Leer un libro", completada: true },
  { id: 6, nombre: "Escribir en el diario", completada: true },
];

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
    </>
  );
}
export default App;
