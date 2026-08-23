import './App.css'
import EstadoCarga from './assets/components/EstadoCarga.jsx'
import LoginStatus from './assets/components/LoginStatus.jsx'
import Notificaciones from './assets/components/Notificaciones.jsx'
import Mensajes from './assets/components/Mensajes.jsx'
function App() {
  return (
    <>
      <LoginStatus isLoggedIn={true} />
      <Notificaciones cantidad={1} />
      <EstadoCarga loading={true} />
      <Mensajes hayMensajes={true}/>  
    </>
  )
}

export default App
