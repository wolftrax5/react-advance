import React from 'react'
import { PhotoCard } from '../PhotoCard'

/* GraphQL and Apollo */
import { gql } from 'apollo-boost'
import { useQuery } from '@apollo/react-hooks'

const query = gql`
   query getSinglePhoto ($id: ID!){
      photo (id: $id){
         id
         categoryId
         src
         likes
         userId
         liked
      }
   }
`
export const PhotoCardDetails = (props) => {
  const { id } = props
  const { data, loading } = useQuery(query, { variables: { id } })

  return (
    <>
      {loading
        ? <PhotoCard />
        : <PhotoCard {...data.photo} />}
    </>
  )
}
