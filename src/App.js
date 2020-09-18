import React from 'react'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyles'
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { PhotoCardDetails } from './components/PhotoCardDetails'

import { Logo } from './components/Logo'
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
          : <>
            <ListOfCategories />
            <ListOfPhotoCards />
          </>
      }
    </>
  )
}
