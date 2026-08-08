
const ListaProductos = ({ productos }) => {
  return (
    <>
        <h2>Lista de Productos</h2>
        
   <ul>
    {productos.map((producto, index) => (
        <li key={index}>{producto.nombre} - ${producto.precio} {producto.precio > 100 ? <span>(Premium)</span> : null}</li>
    ))}
   </ul>
    </>
  )
}

export default ListaProductos