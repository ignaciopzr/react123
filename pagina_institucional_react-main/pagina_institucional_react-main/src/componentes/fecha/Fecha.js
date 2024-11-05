import React, { useState, useEffect } from 'react';
import './Fecha.css';

function Fecha() {
  const diasSemana = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  const mesesAno = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

  const [fechaActual, setFechaActual] = useState(new Date());

  const actualizarFecha = () => {
    setFechaActual(new Date());
  };

  useEffect(() => {
    const intervalo = setInterval(actualizarFecha, 1000 * 60 * 60 * 24); // actualizar fecha cada día
    return () => clearInterval(intervalo); // limpiar el intervalo cuando se desmonta el componente
  }, []);

  const diaSemana = diasSemana[fechaActual.getDay()];
  const diaMes = fechaActual.getDate();
  const mes = mesesAno[fechaActual.getMonth()];
  const ano = fechaActual.getFullYear();

  return (
    
      <div id="fecha" data-testid="fecha">
        {`${diaSemana}, ${diaMes} de ${mes} de ${ano}`}
      </div>
  );
}

export default Fecha;