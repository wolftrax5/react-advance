import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router } from '@reach/router'
import { Home } from './pages/Home'
import { Detail } from './pages/Detail'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { NotRegisterUser } from './pages/NotRegisterUser'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

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

      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                <Favs path='/favs' />
                <User path='/user' />
                </Router>
              : <Router>
                <NotRegisterUser path='/favs' />
                <NotRegisterUser path='/user' />
              </Router>
        }
      </UserLogged>
      <NavBar />
    </>
  )
}
