import { gql } from 'apollo-boost'

export const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup(input: $input)
  }
`
export const SIGNIN_MUTATION = gql`
  mutation signin($input: UserCredentials!) {
    signin(input: $input)
  }
`
