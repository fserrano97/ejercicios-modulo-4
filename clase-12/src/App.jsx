import "./App.css";
import "./index.css";
import Boton from "./components/Actividad-1/Boton";
import { useState } from "react";
import imagenA from "./assets/a.png";
import imagenB from "./assets/b.png";
import imagenC from "./assets/c.png";
function App() {
  const [oscuro, setOscuro] = useState(false);
  const imagenes = [imagenA, imagenB, imagenC];
  const [carrito, setCarrito] = useState([]);
  const [indice, setIndice] = useState(0);

  const AgregarProducto = (producto) => {
    setCarrito([...carrito, producto]);
  };

  return (
    <>
      <div className={oscuro ? "oscuro-true" : "oscuro-false"}>
        <div className="container">
          <h1>Clase 12</h1>
          <div className="actividad uno">
            <h2>Actividad 1 – Cambiar color de fondo</h2>
            <Boton />
          </div>
          <div className="actividad dos">
            <h2>Actividad 2: Modo oscuro</h2>
            <button className="button-color" onClick={() => setOscuro(!oscuro)}>
              Modo Oscuro
            </button>
          </div>
          <div className="actividad tres">
            <h2>Actividad 3: Galería de imágenes global</h2>
            <img className="imagen-act3" src={imagenes[indice]} alt=" " />
            <button
              className="button-color"
              onClick={() => {
                indice < imagenes.length - 1
                  ? setIndice(indice + 1)
                  : setIndice(0);
              }}
            >
              SIGUIENTE
            </button>
          </div>

          <div className="actividad cuatro">
            <h2>Actividad 4: Carrito de compras básico</h2>
            <div className="container-carrito">
            
           {carrito.length === 0 ? "No hay productos agregados" : carrito.map((producto) => (
              <p>{producto}</p>
            ))}
          </div>
          <div className="botones">
            <button
              className="button-color"
              onClick={() => AgregarProducto("Producto")}
            >
              Agregar producto
            </button>
            <button className="button-color" onClick={()=> setCarrito([])}>Limpiar Carrito</button></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
