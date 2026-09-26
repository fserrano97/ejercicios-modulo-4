const BotonSumar = ({ setContador }) => {
  return (
    <>
    <div>
      <button onClick={()=> setContador((contador) => contador+1)}>+</button>
    </div>
    </>
  );
};

export default BotonSumar;
