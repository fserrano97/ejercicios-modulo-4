import './Mensajes.css'
const Mensajes = ({hayMensajes}) => {
  return (
    <>{hayMensajes && <p className='noti noti-msj'>📧 Tienes nuevos mensajes</p>}</>
  )
}

export default Mensajes