import React from 'react'
import { Layout } from '../components/Layout'
import { ListOfFavs } from '../components/ListOfFavs'
export const Favs = () => {
  return (
    <Layout title='Tus Favoritos' subtitle='Los que Diste Like'>
      <ListOfFavs />
    </Layout>
  )
}
