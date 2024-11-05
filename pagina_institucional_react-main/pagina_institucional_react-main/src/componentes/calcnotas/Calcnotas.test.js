import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Calcnotas from './Calcnotas';

describe('Calcnotas', () => {
    test('renders component', () => {
        render(<Calcnotas />);
        const calcularButton = screen.getByTestId('calcular-button');
        expect(calcularButton).toBeInTheDocument();
    });
    test('calculates the average grade when all grades are 5', async () => {
        render(<Calcnotas />);
        const nota1Input = screen.getByLabelText('Nota 1:');
        const nota2Input = screen.getByLabelText('Nota 2:');
        const nota3Input = screen.getByLabelText('Nota 3:');
        const nota4Input = screen.getByLabelText('Nota 4:');
        const calcularButton = screen.getByTestId('calcular-button');
        fireEvent.change(nota1Input, { target: { value: '5' } });
        fireEvent.change(nota2Input, { target: { value: '5' } });
        fireEvent.change(nota3Input, { target: { value: '5' } });
        fireEvent.change(nota4Input, { target: { value: '5' } });
        fireEvent.click(calcularButton);
        const outputMessage = await screen.findByText('Felicitaciones, lo hiciste PERFECTO');
        expect(outputMessage).toBeInTheDocument();
    });

});
