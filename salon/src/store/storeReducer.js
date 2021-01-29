import { combineReducers } from 'redux'
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import data from '../data'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ["auth"]
}

const initialState = {
    name: "",
    password: ""
}

const auth = (state = initialState, action) => {
    const { name, password } = action
    switch (action.type) {
        case "AUTH":
            return { name, password }
        case "LOGOUT":
            return { name: "", password: "" }
        default:
            return state
    }
}

const dataStore = (state = data, action) => {
    switch (action.type) {
        case "DATA":
            return action.data
        default:
            return state
    }
}

const rootReducer = combineReducers({ auth, dataStore })
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export { store, persistor } 
