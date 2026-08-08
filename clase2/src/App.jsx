import Despedida from './components/Despedida'
import ListaTareas from './components/ListaTareas'
import {Saludo} from './components/Saludo'
import ListaProductos from './components/ListaProductos'

function App() {

  const tareas = [
    "Mirar una peli",
    "Colgar la ropa",
    "Ir a la verduleria",
    "Pasear con el perro"
  ]

  const productos = [
    {
      nombre: "Arroz",
      precio: 100
    },
    {
      nombre: "Fideos",
      precio: 200
    },
    {
      nombre: "Pan",
      precio: 300
    }
  ]

  return (
    <>
      <ListaTareas tareas={tareas} />
      <Saludo />
      <Despedida />
      <ListaProductos productos={productos} />
    </>
  )
}

export default App