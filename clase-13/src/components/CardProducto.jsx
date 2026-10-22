import imagen from "/src/assets/producto-demo.jpg";
import style from "/src/components/CardProducto.module.css";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";

const CardProducto = () => {
  const [inCart, setInCart] = useState(false);
  return (
    <div>
      <div className={style.container}>
        <div className={style.card}>
          <img
            className={style.img}
            src={imagen}
            alt="imagen de producto: zapatillas"
          />
          <h3 className={style.titulo}>Zapatillas Deportivas Blancas Mujer</h3>
          <button
            className={inCart ? style.cartVerde : style.cartAzul}
            onClick={() => setInCart(true)}
          >
            <FaShoppingCart />
            {inCart ? (
  <span className={style.textoAgregado}>Agregado</span>
) : (
  <span className={style.textoAgregar}>Agregar al carrito</span>
)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardProducto;
