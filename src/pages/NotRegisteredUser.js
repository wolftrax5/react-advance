import React from 'react'
import { UserForm } from '../components/UserForm'
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
    <UserForm onSubmit={e => handleSubmit(e)} />
  )
}
