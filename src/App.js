import React from 'react'
import { GlobalStyle } from './styles/GlobalStyles'
import { PhotoCardDetails } from './components/PhotoCardDetails'
import { Home } from './pages/Home'
import { Logo } from './components/Logo'
import { Router } from '@reach/router'

export const App = () => {
  const urlParams = new window.URLSearchParams
  (window.location.search)
  const detailId = urlParams.get('detail')

  return (
    <>
      <Logo />
      <GlobalStyle />
      {
        detailId
          ? <PhotoCardDetails id={detailId} />
          : (
            <Router>
              <Home path='/' />
              <Home path='/pet/:categoryId' />
            </Router>
          )
      }
    </>
  )
}
