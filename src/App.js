import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router, Redirect } from '@reach/router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotFound } from './pages/NotFound'
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
        <NotFound default />
        <Home path='/' />
        <Home path='/pet/:categoryId' />
        <Detail path='/detail/:detailId' />
        {!isAuth && <NotRegisteredUser path='/login' />}
        {!isAuth && <Redirect from='/favs' to='/login' />}
        {!isAuth && <Redirect from='/user' to='/login' />}
        {isAuth && <Redirect from='/login' to='/' />}

        <Favs path='/favs' />
        <User path='/user' />
      </Router>
      <NavBar />
    </>
  )
}
