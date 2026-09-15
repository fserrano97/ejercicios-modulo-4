import Hijo  from "./Hijo";

const Padre = () => {
    
  const mensajePadre = () => {
   alert("Hola!");
  };
  
  return <>
 
  <Hijo funcion={mensajePadre}/>
  </>;
};

export default Padre;