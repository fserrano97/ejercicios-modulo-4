

const ListaTareas = ({ tareas, setTareas, eliminarTarea }) => {
  return <>
  <ul >
   {tareas.map((tareas)=> (
   <li key={tareas.id}>{tareas.texto}<button onClick={()=> eliminarTarea(tareas.id, setTareas)}>X</button></li> ))
   }
  </ul>
  
  </>;
};

export default ListaTareas;
