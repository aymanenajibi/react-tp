import { type } from "@testing-library/user-event/dist/cjs/utility/type.js";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";
export const SET_VALUE = "SET_VALUE"; // Action pour définir une valeur spécifique

const initialState = {
  value: 0
};

// Actions 
export function increment(payload) {
    return { type: INCREMENT};
}
export function decremente(payload) {
    return { type: DECREMENT };
}
export function reset(payload) {
    return { type: RESET };
}


//Reducer
export default function reducer(state = initialState, action) {
    switch (action.type) { 
        case INCREMENT:
            return { ...state, value: state.value + 1 }
        case DECREMENT:
            return { ...state, value: state.value - 1 }
        case RESET:
            return { ...state, value: 0 }
        default:
            return state;
    }
}
