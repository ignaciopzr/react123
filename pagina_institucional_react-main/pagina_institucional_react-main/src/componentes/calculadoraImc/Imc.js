import React, { useState } from 'react';
import './Imc.css';

function Imc() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState('');
  const [mensaje, setMensaje] = useState('');

  function calcularIMC() {
    if (peso && altura) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setImc(imcCalculado.toFixed(1));

      if (imcCalculado < 18.5) {
        setMensaje("bajo peso 😨 !");
      } else if (imcCalculado < 25) {
        setMensaje("Tienes el peso ideal 🤗");
      } else if (imcCalculado < 30) {
        setMensaje("Tienes un poco de sobrepeso 😐");
      } else if (imcCalculado < 35) {
        setMensaje("¡Cuidado! grado de obesidad 1 😦");
      } else if (imcCalculado < 40) {
        setMensaje("¡Cuidado! grado de obesidad 2 😧");
      } else {
        setMensaje("¡Cuidado! grado de obesidad 3 😨");
      }

    } else {
      
      setMensaje("Por favor rellena todos los campos!!!");
    }

  }

  return (
    <div className="imc-container">
      <h1>Calculadora de IMC</h1>
      <div id='calc-imc'>
        <label htmlFor='peso'>Peso (kg): </label>
        <input id='peso' type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        
      </div>
      <div id='calc-imc'>
      <label htmlFor='altura'>Altura (cm): </label>
        <input id='altura' type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <button id='btn-calcular' onClick={calcularIMC}>Calcular</button>
      {imc && <p id='resultado'> Para una altura de {altura} cm y un peso {peso} Kg de Tu IMC es: {imc} = {mensaje}</p>}
    </div>

  );

}

export default Imc;
