import React from 'react'
import { Link, Grid, Image } from './styles'
import { useFetchFavs } from '../../hooks/useFetchFavs'

export const ListOfFavs = () => {
  const { loading, error, data } = useFetchFavs()

  if (loading) return <p>Loading...</p>
  if (error) return <p>error...</p>

  return (
    <Grid>
      {data.favs.map((photo) => (
        <Link key={photo.id} to={`/detail/${photo.id}`}>
          <Image src={photo.src} />
        </Link>
      ))}
    </Grid>

  )
}
