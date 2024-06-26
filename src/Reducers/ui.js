import { SET_LOADING } from "../Actions/types"

const initialState = {
    loading: true,
  };
  
  export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
          return { ...state, loading: action.payload };

    default:
        return state;
    }
  };
