import { SET_FAVORITE, SET_POKEMONS } from "../Actions/types"

const initialState = {
    pokemons: [],
  };
  
  export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_POKEMONS:
        return { ...state, pokemons: action.payload };
        
        case SET_FAVORITE:     
          return findByIndex(state, action);
          
    default:
        return state;
    }
  };


  const findByIndex = (state, action) => {
    const newPokemonsList = [...state.pokemons];
    const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
      return pokemon.id === action.payload.pokemonId;
    });

    if (currentPokemonIndex < 0) {
      return state;
    }
    newPokemonsList[currentPokemonIndex].favorite = !newPokemonsList[currentPokemonIndex].favorite;
    return { ...state, pokemons: newPokemonsList }
  }