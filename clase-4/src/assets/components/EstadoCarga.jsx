import './EstadoCarga.css'

const EstadoCarga = ({ loading }) => {
  return (
  <> <div className='container-carga'>
    {loading ? <p className='carga'> Cargando datos...</p> :
                 <p className='carga'>Datos Listos!</p>}
    </div> </>
  )
}

export default EstadoCarga