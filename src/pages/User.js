import React from 'react'
import { useAuthValue } from '../contexts/AuthContext'

export const User = () => {
  const [{}, dispatch] = useAuthValue()

  const handleSubmit = e => {
    e.preventDefault()
    dispatch({
      type: 'LOGOUT'
    })
  }

  return (
    <div>

      <form onSubmit={e => handleSubmit(e)}>
        <button>LogOut</button>
      </form>

    </div>
  )
}
