import React from 'react'
import { PhotoCard } from '../PhotoCard'
import { useFetchPhoto } from '../../hooks/useFetchPhoto'
import { Spinner } from '../Spinner'
export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = useFetchPhoto(categoryId)

  if (loading) return <Spinner />
  if (error) return <p>error...</p>

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} id={photo.id} {...photo} />
      ))}
    </ul>

  )
}
