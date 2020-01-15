import { combineReducers } from 'redux'

const initialState = {
    name: "",
    password: ""
}

const user = (state = initialState, action) => {
    const { name, password } = action
    switch (action.type) {
        case "USER":
            return { name, password }
        default:
            return state
    }
}

const rootReducer = combineReducers({ user })

export default rootReducer