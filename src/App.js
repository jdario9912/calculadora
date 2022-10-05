import './App.css';
import Boton from './componentes/boton';
import BotonClear from './componentes/botonClear';
import Pantalla from './componentes/pantalla';
import freeCodeCamLogo from './imagenes/freecodecamp-logo.png';
import { evaluate } from 'mathjs';
import { useState } from 'react';
import Logo from './componentes/logo';

function App() {

  const [input, setInput] = useState('');

  const cargaPantalla = valor => {
    setInput(input + valor)
  };

  const calcularResultado = () => {
    (input) ? setInput(evaluate(input)) : alert('Ingresaste cualquier cosa')
  }

  return (
    <div className='App'>
      <Logo pathLogo={ freeCodeCamLogo }/>
      <div className='contenedor-calculadora'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClick={ cargaPantalla }>1</Boton>
          <Boton manejarClick={ cargaPantalla }>2</Boton>
          <Boton manejarClick={ cargaPantalla }>3</Boton>
          <Boton manejarClick={ cargaPantalla }>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ cargaPantalla }>4</Boton>
          <Boton manejarClick={ cargaPantalla }>5</Boton>
          <Boton manejarClick={ cargaPantalla }>6</Boton>
          <Boton manejarClick={ cargaPantalla }>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ cargaPantalla }>7</Boton>
          <Boton manejarClick={ cargaPantalla }>8</Boton>
          <Boton manejarClick={ cargaPantalla }>9</Boton>
          <Boton manejarClick={ cargaPantalla }>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={ calcularResultado }>=</Boton>
          <Boton manejarClick={ cargaPantalla }>0</Boton>
          <Boton manejarClick={ cargaPantalla }>.</Boton>
          <Boton manejarClick={ cargaPantalla }>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear limpiar={ () => setInput('') }>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;