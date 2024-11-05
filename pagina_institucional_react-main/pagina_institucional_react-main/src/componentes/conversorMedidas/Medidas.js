import React, { useState } from 'react';
import './Medidas.css';

function Medidas() {
  const [distancia, setDistancia] = useState(0);
  const [origen, setOrigen] = useState('Kilómetros');
  const [destino, setDestino] = useState('Metros');
  const [result, setResult] = useState(0);

  function Convertir() {
    let resultado = 0;

    if (origen === 'Kilómetros' && destino === 'Kilómetros') {
      resultado = distancia * 1;
    } else if (origen === 'Kilómetros' && destino === 'Metros') {
      resultado = distancia * 1000;
    } else if (origen === 'Kilómetros' && destino === 'Centímetros') {
      resultado = distancia * 100000;
    } else if (origen === 'Metros' && destino === 'Kilómetros') {
      resultado = distancia / 1000;
    } else if (origen === 'Metros' && destino === 'Metros') {
      resultado = distancia * 1;
    } else if (origen === 'Metros' && destino === 'Centímetros') {
      resultado = distancia * 100;
    } else if (origen === 'Centímetros' && destino === 'Kilómetros') {
      resultado = distancia / 100000;
    } else if (origen === 'Centímetros' && destino === 'Metros') {
      resultado = distancia / 100;
    } else if (origen === 'Centímetros' && destino === 'Centímetros') {
      resultado = distancia * 1;
    }

    setResult(resultado);
  }

  return (
    <div className="contenedor-medidas">
      <h1>Conversor de longitud</h1>
      <div className="medidas-inputs">
        <input id="distancia-input" type="number" value={distancia} onChange={(e) => setDistancia(e.target.value)}/>
        <select id="origen" value={origen} onChange={(e) => setOrigen(e.target.value)}>
          <option value="Kilómetros">Kilómetros</option>
          <option value="Metros">Metros</option>
          <option value="Centímetros">Centímetros</option>
        </select>
        <select id="destino" value={destino} onChange={(e) => setDestino(e.target.value)}>
          <option value="Kilómetros">Kilómetros</option>
          <option value="Metros">Metros</option>
          <option value="Centímetros">Centímetros</option>
        </select>
        <button id="boton-convertir" onClick={Convertir}>
          Convertir
        </button>
      </div>
      <div>
        <p id="resultado">{result} {destino}</p>
      </div>
    </div>
  );
}

export default Medidas;