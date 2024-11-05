import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import Footer from './componentes/footer/Footer';
import './componentes/footer/Footer.css'
import reportWebVitals from './reportWebVitals';
import Header from './componentes/header/Header'
import './componentes/header/Header.css'
import Imc from './componentes/calculadoraImc/Imc'
import './componentes/calculadoraImc/Imc.css'
import Calc from './componentes/calculadora/Calc';
import './componentes/calculadora/Calc.css'
import Fecha from './componentes/fecha/Fecha';
import './componentes/fecha/Fecha.css';
import Pokeapi from './componentes/pokeapi/Pokeapi';
import './componentes/pokeapi/Pokeapi.css'
import Medidas from './componentes/conversorMedidas/Medidas';
import './componentes/conversorMedidas/Medidas.css';
import Calcnotas from './componentes/calcnotas/Calcnotas';
import './componentes/calcnotas/Calcnotas.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*<App />*/}
    <Footer />
  </React.StrictMode>
);

const header = ReactDOM.createRoot(document.getElementById('Header'));
header.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

const imc = ReactDOM.createRoot(document.getElementById('Imc'));
imc.render(
  <React.StrictMode>
    <Imc />
  </React.StrictMode>
);

const calc = ReactDOM.createRoot(document.getElementById('Calc'));
calc.render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>
);

const fecha = ReactDOM.createRoot(document.getElementById('Fecha'));
fecha.render(
  <React.StrictMode>
    <Fecha />
  </React.StrictMode>
);

const pokeapi = ReactDOM.createRoot(document.getElementById('Pokeapi'));
pokeapi.render(
  <React.StrictMode>
    <Pokeapi />
  </React.StrictMode>
);

const medidas = ReactDOM.createRoot(document.getElementById('Medidas'));
medidas.render(
  <React.StrictMode>
    <Medidas />
  </React.StrictMode>
);

const calcnotas = ReactDOM.createRoot(document.getElementById('Calcnotas'));
calcnotas.render(
  <React.StrictMode>
    <Calcnotas />
  </React.StrictMode>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
