import axios from "axios";

export const getPokemon = () => {
    return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=200&offset=0')
    .then( ({data}) => {
        return data.results
    })
    .catch( error => {
        console.log(error);
    })
}

export const getPokemonDetails = (pokemon) => {
    return axios.get(pokemon.url)
    .then(res => res.data)
    .catch((err) => console.log(err));
  }