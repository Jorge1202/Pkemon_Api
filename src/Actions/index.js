import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";
import { getPokemonDetails } from "../API";

export const setPokemons = (payload) => ({
    type: SET_POKEMONS,
    payload
});


export const setLoading = (payload) => ({
    type: SET_LOADING,
    payload
});

export const setFavorite = (payload) => ({
    type: SET_FAVORITE,
    payload
});



//funcion que retorna una funcion () => () => {}
export const getPokemonsWithDetails = (porkemons = []) => async (dispatch) => {
    const pokemonsDetailed = await Promise.all(
        porkemons.map((pokemon) => getPokemonDetails(pokemon))
    );
    dispatch(setPokemons(pokemonsDetailed))
}