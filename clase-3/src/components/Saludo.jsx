
const Saludo = ({ nombre }) => {
  
  return (
    <h1>Hola {nombre ? nombre : "Invitada"}</h1>

  )
}

export default Saludo