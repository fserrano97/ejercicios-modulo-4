import "./App.css";
import InputControlado from "./components/InputControlado";
import InputNoControlado from "./components/InputNoControlado";
import SoloNumeros from "./components/SoloNumeros"

function App() {
  
  return (
    <>
      <div>
        <h2>Clase 8</h2>
        <h3>Actividad 1: Tu primer input controlado</h3>
        <InputControlado />
        <h3>Actividad 2: Validación con eventos de teclado</h3>
        <SoloNumeros />
        <h3>Actividad 3: Input no controlado con botón</h3>
        <InputNoControlado />
      </div>
    </>
  );
}

export default App;
