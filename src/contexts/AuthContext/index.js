import React, { createContext, useReducer, useContext } from 'react'

const AuthContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isAuth: true
      }
    case 'LOGOUT':
      return {
        ...state,
        isAuth: false
      }
    default:
      return state
  }
}

const initialState = {
  isAuth: false
}

export const AuthProvider = ({ children }) => {
  return (
    <AuthContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuthValue = () => useContext(AuthContext)
