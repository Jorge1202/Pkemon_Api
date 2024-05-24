import axios from "axios";

export const getPokemon = () => {
    return axios
    .get('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then( ({data}) => {
        // data.results
        console.log(data.results)
        return data.results
    })
    .catch( error => {
        console.log(error);
    })
}