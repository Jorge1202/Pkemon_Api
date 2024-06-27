import React from 'react';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../Actions';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { StartButton } from './StartButton';

const PokemonCard = ({name, img, types, idPokemon, favorite}) => {
    const dispatch = useDispatch()
    
    const typesString= types.map(x => x.type.name).join(', ')     
    const tofavorite = () => {
        dispatch(setFavorite({pokemonId: idPokemon}))
    }

    return (
        <Card            
            title={name}
            cover={<img src={img} alt={name}/>}
            extra={
                <StartButton isFavorite={favorite} onclick={()=>{tofavorite()}}/>
            }
        >
            <Meta description={typesString}/>
        </Card>
    );
};
export {PokemonCard};