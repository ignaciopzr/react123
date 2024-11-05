import React from 'react';
import { render } from '@testing-library/react';
import Fecha from './Fecha';

describe('Fecha', () => {
  test('muestra la fecha actual en el formato correcto', () => {
    const hoy = new Date();
    const diaSemana = hoy.toLocaleDateString('es-ES', { weekday: 'long' });
    const diaMes = hoy.getDate();
    const mes = hoy.toLocaleDateString('es-ES', { month: 'long' });
    const ano = hoy.getFullYear();

    const { getByTestId } = render(<Fecha />);
    const fechaElement = getByTestId('fecha');

    expect(fechaElement.textContent).toBe(`${diaSemana}, ${diaMes} de ${mes} de ${ano}`);
  });
});