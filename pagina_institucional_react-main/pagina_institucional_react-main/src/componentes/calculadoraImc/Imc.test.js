import { render, screen, fireEvent } from '@testing-library/react';
import Imc from './Imc';

describe('Imc component', () => {
  test('renders Imc component', () => {
    render(<Imc />);
    const linkElement = screen.getByText(/Calculadora de IMC/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Test calculadora IMC', () => {
    render(<Imc />);
    const pesoInput = screen.getByLabelText('Peso (kg):');
    const alturaInput = screen.getByLabelText('Altura (cm):');
    const button = screen.getByText('Calcular');

    fireEvent.change(pesoInput, { target: { value: '70' } });
    fireEvent.change(alturaInput, { target: { value: '170' } });
    fireEvent.click(button);

    expect(screen.getByText(/24.2/i)).toBeInTheDocument();
    expect(screen.getByText(/Tu IMC es:/i)).toBeInTheDocument();
    expect(screen.getByText(/Tienes el peso ideal/i)).toBeInTheDocument();
  });
});