const Hijo = ({ funcion }) => {
  return (
    <>
      <button className="boton-hijo" onClick={() =>
         funcion()}
         >Click</button>
    </>
  );
};

export default Hijo;
