
const Producto = ({nombre, precio}) => {
  return (
    <div>
        <span>Producto: {nombre} </span> 
        <span>/ Precio: ${precio.toFixed(2)}</span>
    </div>
  )
}

export default Producto