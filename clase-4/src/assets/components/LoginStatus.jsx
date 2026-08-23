import './LoginStatus.css'

const LoginStatus = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <h2 className="title">Bienvenido</h2>
    )
  } else {
    return (
      <h2 className="title">Debes iniciar sesión</h2>
    )
  }
}

export default LoginStatus