import { useMutation } from '@apollo/react-hooks'
import { REGISTER, LOGIN } from '../graphql-tags/AuthMutations'

export const useRegisterMutation = (email, password) => {
  const [mutation, { data, error, loading }] = useMutation(REGISTER)
  const register = (email, password) => {
    return mutation({ variables: { input: { email, password } } })
  }

  return { register, data, error, loading }
}

export const useLoginMutation = (email, password) => {
  const [mutation, { data, error, loading }] = useMutation(LOGIN)

  const login = (email, password) => {
    return mutation({ variables: { input: { email, password } } })
  }

  return { login, data, error, loading }
}
