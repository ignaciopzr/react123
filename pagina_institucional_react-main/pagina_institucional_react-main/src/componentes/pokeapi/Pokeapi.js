import React, { useState } from 'react';
import './Pokeapi.css';

const BASE_URL = 'https://pokeapi.co/api/v2/';

export async function getPokemonData(pokemonNumber) {
    const response = await fetch(`${BASE_URL}pokemon/${pokemonNumber}`);
    const data = await response.json();
    const pokemonData = {
        name: data.name,
        image: data.sprites.other.home.front_default,
        weight: data.weight,
        height: data.height,
        base_experience: data.experience
    };
    return pokemonData;
}

function Pokeapi() {

    const [pokemonData, setPokemonData] = useState(null);
    const [pokemonNumber, setPokemonNumber] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
            if (!response.ok) {
                throw new Error('No se encontró el Pokemon');
            }
            const data = await response.json();
            setPokemonData(data);
            setPokemonNumber('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>

            <form onSubmit={handleSubmit} className="contenedor-form">


                <div className='cabecera'>
                    <img src="https://i.postimg.cc/s2cSCxwN/361998.png"  alt="Pokeball" className="imagen-cabecera"></img>
                    <h2 className="header-title">Pokédex</h2>
                    <img src="https://i.postimg.cc/s2cSCxwN/361998.png" alt="Pokeball" className="imagen-cabecera"></img>
                </div>


                <div className="form-group">
                    <label htmlFor="pokemon-number">Ingrese el Número del Pokémon:</label>
                    <input
                        type="text"
                        id="pokemon-number"
                        value={pokemonNumber}
                        onChange={(event) => setPokemonNumber(event.target.value)}
                    >
                    </input>



                </div>
                <div className="form-group">
                    <button type="submit">Buscar</button>
                </div>
            </form>
            {pokemonData && (
                <div className="contenedor-resultado activo active">
                    <h2>{pokemonData.name}</h2>
                    {pokemonData.sprites?.front_default && (
                        <img src={pokemonData.sprites.other.home.front_default} alt={pokemonData.name} />
                    )}
                    <table className="tabla-resultado">
                        <tbody>
                            <tr>
                                <th>Tipo:</th>
                                <td>{pokemonData.types ? pokemonData.types[0].type.name : ' '}</td>
                            </tr>
                            <tr>
                                <th>Altura:</th>
                                <td>{pokemonData.height} </td>
                            </tr>
                            <tr>
                                <th>Peso:</th>
                                <td>{pokemonData.weight} </td>
                            </tr>
                            <tr>
                                <th>Experiencia:</th>
                                <td>{pokemonData.base_experience} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                
            )}
       </div>
    );
}

export default Pokeapi;



