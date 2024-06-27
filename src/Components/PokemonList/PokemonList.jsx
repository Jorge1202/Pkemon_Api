import React from 'react'
import {  Flex, Skeleton  } from 'antd';
import { PokemonCard } from '../PokemonCard';
import { useSelector } from 'react-redux';
import './PokemonList.css'

const PokemonList = ({pokemons}) => {
    const loading = useSelector(state => state.ui.loading)


    let sizeSkeleton = [];
    for(let i = 1; i<=40; i++){
        sizeSkeleton.push(i)
    }

    return (
        <div className='PokemonList'>
            {
                loading ?
                    sizeSkeleton.map((i) => {
                        return (
                        <div key={i} className='container-skeleton'>                            
                            <div className='d-flex'>
                                <Skeleton.Button active size='small' block={true} />
                            </div>
                            <br/>                                                       
                            <Flex justify='center'>
                                <Skeleton.Image active style={{while:'100%'}}/>
                            </Flex>
                            <br/>                     
                            <div className='d-flex'>
                                <Skeleton.Button active size='small' block={true} />
                            </div>
                        </div>
                        )
                })
                :
                pokemons.map((pokemon)=>{
                    return (<PokemonCard 
                        key={pokemon.name} 
                        name={pokemon.name} 
                        types={pokemon.types}
                        idPokemon={pokemon.id} 
                        favorite={pokemon.favorite}
                        img={pokemon.sprites.front_default} 
                    />)
                })
            }
        </div>
    );
    
};

// PokemonList.defaultProps  = {
//     pokemons: Array(10).fill(''),
// }

export  {PokemonList};


