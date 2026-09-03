
import './Perfil.css'

const Perfil = ({ usuario }) => {
  return (
    <div className="container">
      <div className="perfil">
        <h1>{usuario.nombre}</h1>
        <p>Edad: {usuario.edad}</p>
        {usuario.edad < 18 ? "Usuario menor de edad" : null}
        {usuario.estado === "activo" ? "Usuario activo" : usuario.estado === "inactivo" ? "Usuario inactivo" : "Usuario invitado"}
      </div>
    </div>
  );
};

export default Perfil;
