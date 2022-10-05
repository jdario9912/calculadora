import React from 'react';
import '../estilos/boton.css';
import { btnServices } from '../modelos/btn-services.js';

function Boton(props) {
  return (
    <div
     className={`boton-contenedor ${btnServices.esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
     onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Boton;
