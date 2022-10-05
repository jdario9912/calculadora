import React from 'react'
import '../estilos/boton-clear.css'

function BotonClear(props) {
  return (
    <div 
      className='boton-clear'
      onClick={props.limpiar}
    >
      {props.children}
    </div>
  )
}

export default BotonClear
