import { combineReducers } from "redux";
import { uiReducer } from "./ui";
import { pokemonsReducer } from "./Pokemons";

const rootReducer = combineReducers({
    data: pokemonsReducer,
    ui: uiReducer
})

export { rootReducer };