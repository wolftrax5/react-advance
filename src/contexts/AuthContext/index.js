import React, { createContext, useReducer, useContext } from 'react'

const LOCAL_KEY = 'petken'

const AuthContext = createContext()

const getToken = () => window.localStorage.getItem(LOCAL_KEY)
const setToken = (value) => window.localStorage.setItem(LOCAL_KEY, value)
const cleanToken = () => window.localStorage.removeItem(LOCAL_KEY)

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
