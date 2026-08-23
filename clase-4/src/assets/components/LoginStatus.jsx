import './LoginStatus.css'

const LoginStatus = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return (
      <h1 className="title">Bienvenido</h1>
    )
  } else {
    return (
      <h1 className="title">Debes iniciar sesión</h1>
    )
  }
}

export default LoginStatus