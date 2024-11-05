import { render, screen, fireEvent, getByDisplayValue } from '@testing-library/react';
import Medidas from './Medidas';

describe('Medidas component', () => {
    test('renders Medidas component', () => {
    const { getByText, getByDisplayValue } = render(<Medidas />);
    const title = getByText(/Conversor de longitud/i);
    const inputDistancia = getByDisplayValue('0');
    const selectOrigen = getByDisplayValue('Kilómetros','Metros','Centímetros');
    const selectDestino = getByDisplayValue('Kilómetros','Metros','Centímetros');
    const button = getByText(/convertir/i);
    const resultado = getByText('0 Metros', '0 Centímetros');
    expect(title).toBeInTheDocument();
    expect(inputDistancia).toBeInTheDocument();
    expect(selectOrigen).toBeInTheDocument();
    expect(selectDestino).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(resultado).toBeInTheDocument();
    });

    test('Test Convertir Kilómetros a Metros', () => {
        const { getByDisplayValue, getByText } = render(<Medidas />);
        const inputDistancia = getByDisplayValue('0');
        const selectOrigen = getByDisplayValue('Kilómetros');
        const selectDestino = getByDisplayValue('Metros');
        const button = getByText(/Convertir/i);
        const resultado = getByText('0 Metros')

        fireEvent.change(inputDistancia, { target: { value: '1' } });
        fireEvent.change(selectOrigen, { target: { value: 'Kilómetros' } });
        fireEvent.change(selectDestino, { target: { value: 'Metros' } });
        fireEvent.click(button);
    
        expect(resultado).toHaveTextContent('1000 Metros');

      });

    });