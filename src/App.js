import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList/PokemonList';
import { getPokemon  } from './API';
import { getPokemonsWithDetails } from './Actions';

import logo from './Assets/Img/logo.svg'
import './App.css';
import 'antd/dist/reset.css';



function App() {

  const pokemons = useSelector(state => state.pokemons)
  const dispatch = useDispatch()


  useEffect(()=>{
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));
    };

    fetchPokemons();
  }, [dispatch])

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'></img>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      <PokemonList pokemons={pokemons}/>
    </div>
  );
}

export default  App;
