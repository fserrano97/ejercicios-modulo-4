
import "./App.css";
import Button from "./components/Button";
import CardProducto from "./components/CardProducto";
import Tarjeta from "./components/Tarjeta";

function App() {
 
  return (
    <>
      <div className="container">
        <h1>Clase 13</h1>
        <h2>Actividad 1 - Básico: Tarjeta con estilos en línea</h2>
        <Tarjeta />
        <h2>Actividad 2 - Intermedio: Botones con Módulos CSS</h2>
        <Button />
        <h2>
          Actividad 3 - Avanzado: CardProducto: Estilos dinámicos + Íconos +
          Imágenes
        </h2>
        <CardProducto/>
      </div>
    </>
  );
}

export default App;
