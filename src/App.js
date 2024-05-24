import { useEffect } from 'react';
import { connect } from 'react-redux';

import { Col } from 'antd';
import { Searcher } from './Components/Searcher';
import { PokemonList } from './Components/PokemonList/PokemonList';
import { getPokemon } from './API';
import { setPokemons as setPokemonsActions } from './Actions';



import logo from './Assets/Img/logo.svg'
import './App.css';
import 'antd/dist/reset.css';



function App({pokemons, setPokemons}) {

useEffect(()=>{
  const fetchPokemons = async () => {
    let pokemonsList =  await getPokemon();
    setPokemons(pokemonsList)
  }

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


//funcion que recibe nuestro estado y retorna un objeto cuyas propiedasdes seran enviadas al componente que se esta conectando a redux
const mapStateToProps = (state) => ({
  pokemons : state.pokemons
})

//funcion que recibe el dispatcher de redux 
const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value))
})

export default  connect(mapStateToProps, mapDispatchToProps)(App);
