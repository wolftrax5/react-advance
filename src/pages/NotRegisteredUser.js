import React from 'react'
import { UserForm } from '../components/UserForm'
import { useAuthValue } from '../contexts/AuthContext'
import { useRegisterMutation, useLoginMutation } from '../hooks/useAuth'

export const NotRegisteredUser = () => {
  const [{}, dispatch] = useAuthValue()

  const { register, error: errorReg, loading: loadingReg } = useRegisterMutation()
  const { login, error: errorLog, loading: loadingLog } = useLoginMutation()

  const handleSubmit = ({ email, password }) => {
    login(email, password)
      .then((response) => {
        dispatch({
          type: 'LOGIN',
          payload: { token: response.data.login }
        })
      })
      .catch(() => {
        console.log('La contraseña no es correcta o el usuario no existe.')
      })
  }

  const registerSubmit = ({ email, password }) => {
    register(email, password)
      .then((response) => {
        dispatch({
          type: 'REGISTER',
          payload: { isAuth: true, token: response.data.signup }
        })
      })
      .catch(() => {
        console.log('El usuario ya existe o hay algún problema.')
      })
  }

  const errorRegMsg = errorReg && 'El usuario ya existe o hay algún problema.'
  const errorLogMsg = errorLog && 'La contraseña no es correcta o el usuario no existe.'

  return (
    <>
      <UserForm disabled={loadingLog} error={errorLogMsg} onSubmit={handleSubmit} title='LogIn' />
      <UserForm disabled={loadingReg} error={errorRegMsg} onSubmit={registerSubmit} title='Register' />
    </>
  )
}
