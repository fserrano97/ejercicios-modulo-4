const ListaProductos = ({ productos }) => {
  return (
    <div className="container">
      <h1 className="titulo">Lista de Productos</h1>
      <div className="productos">
           {productos.map((producto) => (
        <ul className="producto" key={producto.id}>
          <li className="nombre-producto">{producto.nombre}</li>
          <li>${producto.precio.toFixed(2)}</li>
          {producto.precio < 100 &&  <p className="oferta">OFERTA</p>}
        </ul>
      ))}


      </div>
   
    </div>
  );
};

export default ListaProductos;
