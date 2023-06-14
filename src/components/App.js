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
  });
  return (
    <div className='App'>
      <PokemonPage showPokemon={showPokemon} />
    </div>
  );
}

export default App;
