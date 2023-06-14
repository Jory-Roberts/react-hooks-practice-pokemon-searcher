import React from 'react';
import PokemonPage from './PokemonPage';
import { useState, useEffect } from 'react';

// http://localhost:3001/pokemon

function App() {
  const [showPokemon, setShowPokemon] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
      .then((response) => response.json())
      .then((pokemonData) => setShowPokemon(pokemonData));
  }, []);

  const searchPokemon = (name) => {
    const filteredPokemon = showPokemon.filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
    setShowPokemon(filteredPokemon);
  };
  return (
    <div className='App'>
      <PokemonPage
        showPokemon={showPokemon}
        searchPokemon={searchPokemon}
      />
    </div>
  );
}

export default App;
