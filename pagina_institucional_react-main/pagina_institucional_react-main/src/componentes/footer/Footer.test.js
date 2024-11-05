import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';

describe('Test component', () => {
  test('renders Footer component', () => {
    render(<Footer />);
    const linkElement = screen.getByText(/ Jose Fernando Causado/i);
    expect(linkElement).toBeInTheDocument();
    //test footer izq med der
    expect(screen.getByText(/57 319-333-33-33/i)).toBeInTheDocument();
    expect(screen.getByText(/josefc@jfc.edu.co/i)).toBeInTheDocument();
    expect(screen.getByText(/Donde la educación se encuentra con la innovación/i)).toBeInTheDocument();
  });
});