import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'
import { Layout } from '../components/Layout'

export const HomePage = ({ categoryId }) => {
  return (
    <Layout>
      <ListOfCategories />
      <ListOfPhotoCards categoryId={categoryId} />
    </Layout>
  )
}

export default React.memo(HomePage, (prevProps, props) => {
  return prevProps.categoryId === props.categoryId
})
