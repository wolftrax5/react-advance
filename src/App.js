import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisteredUser } from './pages/NotRegisteredUser'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { useAuthValue } from './contexts/AuthContext'

export const App = () => {
  const [{ isAuth }] = useAuthValue()
  return (
    <>
      <Logo />
      <GlobalStyle />

      <Router>
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
      </Router>

      {
        isAuth
          ? <Router>
            <Favs path='/favs' />
            <User path='/user' />
            </Router>
          : <Router>
            <NotRegisteredUser path='/favs' />
            <NotRegisteredUser path='/user' />
            </Router>
      }
      <NavBar />
    </>
  )
}
