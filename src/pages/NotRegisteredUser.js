import React from 'react'
import { useAuthValue } from '../contexts/AuthContext'

export const NotRegisteredUser = () => {
  const [{}, dispatch] = useAuthValue()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'LOGIN'
    })
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <button>Iniciar sesión</button>
    </form>
  )
}
