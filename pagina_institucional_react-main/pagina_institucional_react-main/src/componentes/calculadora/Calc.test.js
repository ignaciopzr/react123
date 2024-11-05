import { render, screen, fireEvent } from '@testing-library/react';
import Calc from './Calc';

describe('Calc', () => {
test('Evaluar una operación compleja', () => {
    render(<Calc />);
    const buttonEight = screen.getByText('8');
    const buttonTwo = screen.getByText('2');
    const buttonDivide = screen.getByText('/');
    const buttonPlus = screen.getByText('+');
    const buttonMinus = screen.getByText('-');
    const buttonEqual = screen.getByText('=');
    const buttonSix = screen.getByText('6');
    const buttonMultiply = screen.getByText('*');

    fireEvent.click(buttonEight);
    fireEvent.click(buttonMultiply);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonPlus);
    fireEvent.click(buttonEight);
    fireEvent.click(buttonDivide);
    fireEvent.click(buttonTwo);
    fireEvent.click(buttonMinus);
    fireEvent.click(buttonSix);
    fireEvent.click(buttonEqual);

    const result = screen.queryByText('6');
    expect(result).toBeInTheDocument();
});
});
