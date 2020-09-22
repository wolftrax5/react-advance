import React, { useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { UserForm } from '../components/UserForm'
import { useAuthValue } from '../contexts/AuthContext'
import { REGISTER } from '../graphql-tags/AuthMutations'

export const NotRegisteredUser = () => {
  const [{}, dispatch] = useAuthValue()
  const [err, setError] = useState(null)

  const handleSubmit = () => {
    dispatch({
      type: 'LOGIN'
    })
  }
  const [signup, { loading }] = useMutation(REGISTER)

  const handleOnSubmit = ({ email, password }) => {
    const input = { email, password }
    signup({
      variables: { input }
    }).then(() => {
      dispatch({
        type: 'REGISTER',
        payload: { isAuth: true }
      })
    }).catch((error) => { setError(error.graphQLErrors[0].message) })
  }
  return (
    <>
      <UserForm onSubmit={handleSubmit} title='LogIn' />
      <UserForm disabled={loading} error={err} onSubmit={handleOnSubmit} title='Register' />
    </>
  )
}
