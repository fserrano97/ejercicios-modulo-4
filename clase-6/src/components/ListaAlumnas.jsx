import "./ListaAlumnas.css";

const ListaAlumnas = ({ alumnas }) => {

  let cantPresentes = 0;
  alumnas.forEach((alumna) => {
    if (alumna.presente) {
      cantPresentes++;
    }
  });

  return (
    <div className="container-alumnas">
      <h1>Lista de alumnas</h1>
      {alumnas.map((alumna) => {
        return (
          <div className="alumna" key={alumna.id}>
            <h3>Nombre: {alumna.nombre} / Estado: {alumna.presente ? "Presente" : "Ausente"}</h3>
          </div>
        );
      })}
      <h4>Cantidad de alumnas presentes: {cantPresentes}</h4>
    </div>
  );
};

export default ListaAlumnas;
