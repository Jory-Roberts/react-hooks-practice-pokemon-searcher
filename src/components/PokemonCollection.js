import React from 'react';
import PokemonCard from './PokemonCard';
import { Card } from 'semantic-ui-react';

function PokemonCollection({ showPokemon }) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {showPokemon.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          hp={pokemon.hp}
          image={pokemon.sprites.front}
        />
      ))}
    </Card.Group>
  );
}

export default PokemonCollection;
