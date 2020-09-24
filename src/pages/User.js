import React from 'react'
import { useAuthValue } from '../contexts/AuthContext'
import { SubmintButton } from '../components/SubmitButton'

export default () => {
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
        <SubmintButton>LogOut</SubmintButton>
      </form>

    </div>
  )
}
