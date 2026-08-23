import './Notificaciones.css'

const Notificaciones = ({cantidad}) => {
  return (
   <> {cantidad > 0 ? <p className='noti noti-cant'>🔔 Tienes {cantidad} notificaciones</p> : null}</>
  )
}

export default Notificaciones