
import './App.css'
//import Saludo from './components/Saludo'
//import Boton from './components/Boton'
//import Caja from './components/Caja'
import Layout from './components/Layout'

function App() {
  return (
    <>
    {/*
     <Saludo nombre="Florencia"/> 
     <Boton texto="Click aqui"  click = {() => console.log('Boton clicado!')}/>
     <Caja/>*/}
     <Layout 
     header={
     <h1>Encabezado</h1>
    }
     content={
      <h1>Contenido principal</h1>
     }
      footer={
       <h4>Pie de pagina</h4>
      }
     />
    </>
  )
}

export default App
