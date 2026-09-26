import "./App.css";
import Padre from "./components/Actividad 1/Padre.jsx";
import PadreContador from "./components/Actividad 2/PadreContador.jsx";
import PadreTarea from "./components/Actividad 3/PadreTarea.jsx";


function App() {
  return (
    <>
      <h2>Actividad 1: Básico: Mensaje compartido</h2>
      <Padre />
      <h2>Actividad 2: Intermedio: Contador compartido con botones</h2>
      <PadreContador/>
      <h2>Actividad 3: Avanzado: Lista de tareas colaborativa</h2>
      <PadreTarea/>
    </>
  );
}

export default App;
