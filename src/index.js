import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'
import { AuthProvider } from './contexts/AuthContext'
import { getToken, cleanToken } from './auth-provider'

// Components
import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server.behagoras.now.sh/graphql',
  request: operation => {
    const token = getToken()
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      cleanToken()
      window.location.href = '/'
    }
  }
})

ReactDOM.render(
  // eslint-disable-next-line react/jsx-filename-extension
  <AuthProvider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </AuthProvider>,
  document.getElementById('app')
)
