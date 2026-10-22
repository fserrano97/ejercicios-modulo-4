const Tarjeta = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            border: "1px solid black",
            padding: "20px",
            backgroundColor: "grey",
            width: "300px",
            borderRadius: "4px",
          }}
        >
          <h2 style={{ color: "blue", fontSize: "24px" }}>Mario Bross</h2>
          <p style={{ color: "white" }}>
            Mario es un fontanero italiano que forma parte del mundo gamer desde
            hace más de 40 años. El hoy reconocido personaje es el protagonista
            de la saga de videojuegos de Nintendo, siendo el más popular de
            ellos el “Super Mario Bros”.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tarjeta;
