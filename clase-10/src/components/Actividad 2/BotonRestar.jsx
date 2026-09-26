const BotonRestar = ({ setContador }) => {
  return (
    <>
      <div>
        <button onClick={() => setContador((contador) => contador - 1)}>
          -
        </button>
      </div>
    </>
  );
};

export default BotonRestar;
