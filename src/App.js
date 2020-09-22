import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyle />

      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>
      <NavBar />
    </>
  )
}
