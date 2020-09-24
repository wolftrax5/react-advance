import React from 'react'
import PropTypes from 'prop-types'
import { ImgWrapper, Img, Article } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'

import { gql } from 'apollo-boost'
import { useMutation } from '@apollo/react-hooks'
import { Link } from '@reach/router'

// Import const TOGGLE_LIKE
const TOGGLE_LIKE = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id
      liked
      likes
    }
  }`

const DEFAULT_CARD = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'

export const PhotoCard = ({ id, likes = 0, liked, src = DEFAULT_CARD }) => {
  const [show, ref] = useNearScreen()
  const [toggleLike] = useMutation(TOGGLE_LIKE, {
    variables: { input: { id } }
  })

  const handleFavClick = () => {
    toggleLike()
  }
  return (
    <Article ref={ref}>
      {show &&
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>}
    </Article>
  )
}
PhotoCard.propTypes = {
  id: PropTypes.string,
  likes: PropTypes.number,
  liked: PropTypes.bool,
  src: PropTypes.string
}
