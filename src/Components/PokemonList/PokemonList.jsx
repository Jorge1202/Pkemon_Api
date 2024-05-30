import React from 'react';
import './PokemonList.css'
import { PokemonCard } from '../PokemonCard';

const PokemonList = ({pokemons}) => {
    return (
        <div className='PokemonList'>
            {
                pokemons.map((pokemon)=>{
                    return <PokemonCard key={pokemon.name} name={pokemon.name} img={pokemon.sprites.front_default}/>
                })
            }
        </div>
    );
};

// PokemonList.defaultProps  = {
//     pokemons: Array(10).fill(''),
// }

export  {PokemonList};


