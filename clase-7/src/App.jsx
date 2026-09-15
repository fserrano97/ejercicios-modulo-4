import "./index.css";
import "./App.css";
import Botones from "./components/Botones.jsx";
import Formulario from "./components/Formulario.jsx";
import Tareas from "./components/Tareas.jsx";
import BotonColor from "./components/BotonColor.jsx";
import Padre from "./components/Padre.jsx"

function App() {
  return (
    <>
      <div>
        <h2 className="titulo">Practica clase 7</h2>
        <p className="consigna">
          1. Crear un componente contador con botones de + y -.
        </p>
        <Botones />

        <p className="consigna">
          2. Crear un componente formulario que guarde nombre y apellido en el
          estado y los muestre en pantalla.
        </p>
        <Formulario />

        <p className="consigna">
          3. Crear una lista de tareas que permita agregar nuevas tareas desde
          un input.
        </p>
        <Tareas />

        <p>
          4. Hacer un botón que al hacer clic cambie el color de un texto (usar
          estado booleano).
        </p>
        <BotonColor />

        <p>
          5. Crear un componente Padre y Hijo donde el padre pase una función al
          hijo, y el hijo la ejecute al hacer clic en un botón.
        </p>
        <Padre/>
      </div>
    </>
  );
}

export default App;
