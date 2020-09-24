import React from 'react'
import { PhotoCardDetails } from '../components/PhotoCardDetails'
import { Layout } from '../components/Layout'

export const Detail = ({ detailId }) => {
  return (
    <Layout title={`Photo ${detailId}`}>
      <PhotoCardDetails id={detailId} />
    </Layout>
  )
}
