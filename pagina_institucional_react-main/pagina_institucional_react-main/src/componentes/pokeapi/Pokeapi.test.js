import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Pokeapi from './Pokeapi';

describe('Pokeapi component', () => {
  test('renders Pokeapi component', () => {
    render(<Pokeapi />);
    const linkElement = screen.getByText(/Pokédex/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('Test pokemon', async() => {
    render(<Pokeapi />);
    const pokemonNumberInput = screen.getByLabelText('Ingrese el Número del Pokémon:');
    const button = screen.getByText('Buscar');
    
    fireEvent.change(pokemonNumberInput, { target: { value: '19' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/RATTATA/i)).toBeInTheDocument();
  });
  // Verificar que se muestre la información correcta
  expect(screen.getByText(/normal/i)).toContainElement(screen.getByText(/normal/i));
  expect(screen.getByText(/3 cm/i)).toContainElement(screen.getByText(/3 cm/i));
  expect(screen.getByText(/35 kg/i)).toContainElement(screen.getByText(/35 kg/i));  
  expect(screen.getByText(/51 exp/i)).toContainElement(screen.getByText(/51 exp/i));  
 
  })
});