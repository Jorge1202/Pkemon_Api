// import { createSlices } from '@reduxjs/toolkit';

// const initialState = {
//     pokemons:[]
// }

// const pokemonSlices = createSlices({
//     name:'data',
//     initialState,
//     reducers:{
//         setPokemons: (state, action) =>{
//             state.pokemons = action.payload
//         },
//         setFavorite: (state, action) => {
//             findByIndex(state, action);
//         }
//     }
// }) 

// export const { setFavorite, setPokemons} = pokemonSlices.actions;

// export default pokemonSlices.reducers

// const findByIndex = (state, action) => {
//     const newPokemonsList = state.pokemons;

//     const currentPokemonIndex = newPokemonsList.findIndex((pokemon) => {
//       return pokemon.id === action.payload.pokemonId;
//     });

//     if (currentPokemonIndex >= 0) {
//         const isFavorite = newPokemonsList[currentPokemonIndex].favorite

//         newPokemonsList[currentPokemonIndex].favorite = !isFavorite      
//     }
    
//   }