import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';

//POST request to persist data

function PokemonForm({ addPokemon }) {
  const [name, setName] = useState('');
  const [front, setFrontSprite] = useState([]);
  const [back, setBackSprite] = useState([]);
  const [hp, setHp] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newPokemon = {
      name,
      hp,
      sprites: { front, back },
    };

    try {
      const response = await fetch('http://localhost:3001/pokemon', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newPokemon),
      });

      if (response.ok) {
        const addedPokemon = await response.json();
        addPokemon(addedPokemon);
        setName('');
        setFrontSprite('');
        setBackSprite('');
        setHp('');
      } else {
        console.error('Failed to add Pokemon');
      }
    } catch (error) {
      console.error('Error adding pokemon', error);
    }
  };

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths='equal'>
          <Form.Input
            fluid
            label='Name'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Form.Input
            fluid
            label='hp'
            placeholder='hp'
            name='hp'
            value={hp}
            onChange={(e) => setHp(e.target.value)}
          />
          <Form.Input
            fluid
            label='Front Image URL'
            placeholder='url'
            name='frontUrl'
            value={front}
            onChange={(e) => setFrontSprite(e.target.value)}
          />
          <Form.Input
            fluid
            label='Back Image URL'
            placeholder='url'
            name='backUrl'
            value={back}
            onChange={(e) => setBackSprite(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
