import { render, screen} from '@testing-library/react';
import Header from './Header';

describe('Test component', () => {
  test('renders Header component', () => {
    render(<Header />);
    //test  menu Header
    const linkElement = screen.getByText(/Inicio/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getByText(/Matrículas/i)).toBeInTheDocument();
    expect(screen.getByText(/Notas/i)).toBeInTheDocument();
    expect(screen.getByText(/Docentes/i)).toBeInTheDocument();
    expect(screen.getByText(/Misión y Visión/i)).toBeInTheDocument();
    expect(screen.getByText(/PQRS/i)).toBeInTheDocument();
  });
});