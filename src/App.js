import React, { Suspense } from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { Router, Redirect } from '@reach/router'
import { Logo } from './components/Logo'
import { NavBar } from './components/NavBar'
import { useAuthValue } from './contexts/AuthContext'
import { Spinner } from './components/Spinner'

const Home = React.lazy(() => import('./pages/Home'))
const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const NotRegisteredUser = React.lazy(() => import('./pages/NotRegisteredUser'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const [{ isAuth }] = useAuthValue()
  return (
    <Suspense fallback={<Spinner />}>
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
    </Suspense>
  )
}
