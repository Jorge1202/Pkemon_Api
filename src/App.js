import { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { Col } from 'antd';
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList/PokemonList';
import { getPokemon  } from './API';
import { getPokemonsWithDetails, setLoading } from './Actions';

import logo from './Assets/Img/logo.svg'
import './App.css';
import 'antd/dist/reset.css';


///sddf
function App() {

  const pokemons = useSelector(state => state.data.pokemons, shallowEqual)
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(setLoading(true))
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes));

      if(pokemonsRes.length !== 0){
        dispatch(setLoading(false))        
      }
    };
    
    fetchPokemons();
  }, [])             

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
