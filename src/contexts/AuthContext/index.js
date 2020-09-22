import React, { createContext, useReducer, useContext } from 'react'
import { cleanToken, setToken, getToken } from '../../auth-provider'

const AuthContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      setToken(action.payload.token)
      return {
        ...state,
        isAuth: true
      }
    case 'LOGOUT':
      cleanToken()
      return {
        ...state,
        isAuth: false
      }
    case 'REGISTER':
      setToken(action.payload.token)
      return {
        ...state,
        isAuth: action.payload.isAuth
      }
    default:
      return state
  }
}

const initialState = {
  isAuth: getToken()
}

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthValue = () => useContext(AuthContext)
