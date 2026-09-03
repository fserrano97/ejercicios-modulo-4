import "./App.css";
import "./index.css";
import Producto from "./Components/producto";
import { useState } from "react";

const listaFrutas = [
  {
    id: 1,
    nombre: "Manzana",
  },
  {
    id: 2,
    nombre: "Pera",
  },
  {
    id: 3,
    nombre: "Banana",
  },
  {
    id: 4,
    nombre: "Naranja",
  },
];

const listaTareas = [
  { nombre: "Comprar leche", completado: true },
  { nombre: "Hacer ejercicio", completado: true },
  { nombre: "Leer un libro", completado: false },
];

const listaProductos = [
  { id: 1, nombre: "Leche", precio: 2.5 },
  { id: 2, nombre: "Pan", precio: 1.5 },
  { id: 3, nombre: "Huevos", precio: 3.0 },
  { id: 4, nombre: "Queso", precio: 4.0 },
];

const listaUsuarios = [
  { id: 1, nombre: "Juan", edad: 25 },
  { id: 2, nombre: "María", edad: 30 },
  { id: 3, nombre: "Pedro", edad: 28 },
  { id: 4, nombre: "Ana", edad: 22 },
  { id: 5, nombre: "Luis", edad: 35 },
];


function App() {
  const [usuarios, setUsuarios] = useState(listaUsuarios); 
  return (
    <>
      <section className="section">
        <div className="contenedor-actividad">
          <div className="actividad-1">
            <h1>Actividad 1</h1>
            <h2>Frutas</h2>
            {listaFrutas.map((fruta) => (
              <div className="fruta" key={fruta.id}>
                <p>{fruta.nombre}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contenedor-actividad">
          <div className="actividad-2">
            <h1>Actividad 2</h1>
            <h2>Lista de Tareas</h2>
            {listaTareas.map((tarea) => (
              <div key={tarea.nombre}>
                {tarea.completado ? (
                  <p className="tarea-verde">{tarea.nombre}</p>
                ) : (
                  <p className="tarea-roja">{tarea.nombre}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="contenedor-actividad">
          <div className="actividad-3">
            <h1>Actividad 3</h1>
            <h3>Lista de Productos</h3>
            {listaProductos.map((produ) => (
              <Producto
                key={produ.id}
                nombre={produ.nombre}
                precio={produ.precio}
              />
            ))}
          </div>
        </div>

        <div className="contenedor-actividad">
          <div className="actividad-4">
            <h1>Actividad 4</h1>
            <h3>Lista de Usuarios</h3>

           {usuarios.map((usuario) => (
              <div key={usuario.id}>
                <p>Nombre: {usuario.nombre}</p>
                <p>Edad: {usuario.edad}</p>
                <button onClick={() => {
                
                  setUsuarios(usuarios.filter(u => u.id !== usuario.id));
                }}>
                  Borrar
                </button>
              </div>
            ))}
          </div>
        </div>



      </section>
    </>
  );
}

export default App;
