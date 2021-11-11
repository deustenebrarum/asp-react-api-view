import { createStore } from "redux" 

const defaultState = {
    token: "",
    username: "",
    password: ""
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "SET_AUTH_TOKEN":
            return {...state, token: action.payload}
        case "SET_USERNAME":
            return {...state, username: action.payload}
        case "SET_PASSWORD":
            return {...state, password: action.payload}
        default:
            return state
    }    
}

export const store = createStore(reducer)