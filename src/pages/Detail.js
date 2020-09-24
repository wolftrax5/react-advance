import React from 'react'
import { PhotoCardDetails } from '../components/PhotoCardDetails'
import { Layout } from '../components/Layout'

export default ({ detailId }) => {
  return (
    <Layout title={`Photo ${detailId}`}>
      <PhotoCardDetails id={detailId} />
    </Layout>
  )
}
