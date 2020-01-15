import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import moment from 'moment'
import axios from 'axios'
import actionTypes from './types'
import initialState from './initialState'

// REDUCERS
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.LOGIN:
      return Object.assign({}, state, {
        login: initialState.login
      })
    /*Profile*/
    case actionTypes.COLORNUMBERPROFILE:
      return Object.assign({}, state, {
        colorNumberProfile: action.colorNumberProfile
      })
    case actionTypes.COLORNAMEPROFILE:
      return Object.assign({}, state, {
        colorNameProfile: action.colorNameProfile
      })
    case actionTypes.HANDLENAMEPROFILE:
      return Object.assign({}, state, {
        handleNameProfile: action.handleNameProfile
      })
    case actionTypes.HANDLENUMBERPROFILE:
      return Object.assign({}, state, {
        handleNumberProfile: action.handleNumberProfile
      })
    /*Composite*/
    case actionTypes.COLORNUMBERCOMPOSITE:
      return Object.assign({}, state, {
        colorNumberComposite: action.colorNumberComposite
      })
    case actionTypes.COLORNAMECOMPOSITE:
      return Object.assign({}, state, {
        colorNameComposite: action.colorNameComposite
      })
    case actionTypes.HANDLENUMBERCOMPOSITE:
      return Object.assign({}, state, {
        colorNumberPro: action.payload
      })
    case actionTypes.HANDLENAMECOMPOSITE:
      return Object.assign({}, state, {
        colorNamePro: action.colorNamePro
      })
    /*Financial*/
    case actionTypes.COLORNUMBERFINANCIAL:
      return Object.assign({}, state, {
        colorNumberFinancial: action.colorNumberFinancial
      })
    case actionTypes.COLORNAMEFINANCIAL:
      return Object.assign({}, state, {
        colorNameFinancial: action.colorNameFinancial
      })
    case actionTypes.HANDLENUMBERFINANCIAL:
      return Object.assign({}, state, {
        handleNumberFinancial: action.handleNumberFinancial
      })
    case actionTypes.HANDLENAMEFINANCIAL:
      return Object.assign({}, state, {
        handleNameFinancial: action.handleNameFinancial
      })
    /*kyc*/
    case actionTypes.COLORNUMBERKYC:
      return Object.assign({}, state, {
        colorNumberKyc: action.colorNumberKyc
      })
    case actionTypes.COLORNAMEKYC:
      return Object.assign({}, state, {
        colorNameKyc: action.colorNameKyc
      })
    case actionTypes.HANDLENUMBERKYC:
      return Object.assign({}, state, {
        handleNumberKyc: action.handleNumberKyc
      })
    case actionTypes.HANDLENAMEKYC:
      return Object.assign({}, state, {
        handleNameKyc: action.handleNameKyc
      })
    /*new*/
    case actionTypes.COLORNUMBERNEWS:
      return Object.assign({}, state, {
        colorNumberNews: action.colorNumberNews
      })
    case actionTypes.COLORNAMENEWS:
      return Object.assign({}, state, {
        colorNameNews: action.colorNameNews
      })
    case actionTypes.HANDLENUMBERNEWS:
      return Object.assign({}, state, {
        handleNumberNews: action.handleNumberNews
      })
    case actionTypes.HANDLENAMENEWS:
      return Object.assign({}, state, {
        handleNameNews: action.handleNameNews
      })
    /*PeerCompos*/
    case actionTypes.COLORNUMBERPEERCOMPOS:
      return Object.assign({}, state, {
        colorNumberPeerCompos: action.colorNumberPeerCompos
      })
    case actionTypes.COLORNAMEPEERCOMPOS:
      return Object.assign({}, state, {
        colorNamePeerCompos: action.colorNamePeerCompos
      })
    case actionTypes.HANDLENUMBERPEERCOMPOS:
      return Object.assign({}, state, {
        handleNumberPeerCompos: action.handleNumberPeerCompos
      })
    case actionTypes.HANDLENAMEPEERCOMPOS:
      return Object.assign({}, state, {
        handleNamePeerCompos: action.handleNamePeerCompos
      })

    /*Predictive*/
    case actionTypes.COLORNUMBERPREDICTIVE:
      return Object.assign({}, state, {
        colorNumberPredictive: action.colorNumberPredictive
      })
    case actionTypes.COLORNAMEPREDICTIVE:
      return Object.assign({}, state, {
        colorNamePredictive: action.colorNamePredictive
      })
    case actionTypes.COLORNUMBERPREDICTIVE:
      return Object.assign({}, state, {
        colorNumberPredictive: action.colorNumberPredictive
      })
    case actionTypes.COLORNAMEPREDICTIVE:
      return Object.assign({}, state, {
        colorNamePredictive: action.colorNamePredictive
      })
    /*Risk*/
    case actionTypes.COLORNUMBERRISK:
      return Object.assign({}, state, {
        colorNumberRisk: action.colorNumberRisk
      })
    case actionTypes.COLORNUMBERRISK:
      return Object.assign({}, state, {
        colorNameRisk: action.colorNameRisk
      })
    case actionTypes.HANDLENUMBERRISK:
      return Object.assign({}, state, {
        handleNumberRisk: action.handleNumberRisk
      })
    case actionTypes.HANDLENAMERISK:
      return Object.assign({}, state, {
        handleNameRisk: action.handleNameRisk
      })
    /*Web*/
    case actionTypes.COLORNUMBERWEB:
      return Object.assign({}, state, {
        colorNumberWeb: action.colorNumberWeb
      })
    case actionTypes.COLORNAMEWEB:
      return Object.assign({}, state, {
        colorNameWeb: action.colorNameWeb
      })
    case actionTypes.HANDLENUMBERWEB:
      return Object.assign({}, state, {
        handleNumberWeb: action.handleNumberWeb
      })
    case actionTypes.HANDLENAMEWEB:
      return Object.assign({}, state, {
        handleNameWeb: action.handleNameWeb
      })
    default: return state
  }
}

// ACTIONS

export const login = () => async (dispatch) => {
  const result = await axios({
    url: 'http://localhost:5000/',
    method: 'post',
    headers: { 'Authorization': `Basic ${btoa('admin:admin')}` },
    data: {
      query: `
          query {
            login: user(filter:{
              user: "admin",
              pass: "admin"
            })
            {
              email, user, access, fullname
            }
          }
        `
    }
  })
  const rs = result.data.data.login
  const login = {
    active: rs.length ? true : false,
    data: rs.length ? result.data.data.login[0] : {}
  }
  return dispatch({ type: actionTypes.RESET, login })
}

export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: 0 })
}

export const startClock = dispatch => {
  return setInterval(() => {
    // Dispatch `TICK` every 1 second
    dispatch({ type: actionTypes.TICK, light: true, ts: moment() })
  }, 1000)
}


export function initializeStore(initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}