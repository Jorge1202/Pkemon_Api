import { SET_POKEMON } from "../Actions/types"

const initialState = {
    pokemons:[]

}

export const pokemonsReducer = (state = initialState, actions) => {
    switch(actions.type){
        case SET_POKEMON : 
            return { ...state, pokemons: actions.payload }
            
        default:
            return state
    }
}