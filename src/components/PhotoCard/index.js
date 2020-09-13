import React, { useRef, useEffect, useState } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdThumbUp } from 'react-icons/md'

const DEFAULT_CARD = 'https://images.unsplash.com/photo-1520561805070-83c413349512?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'
export const PhotoCard = ({ id, likes = 0, src = DEFAULT_CARD }) => {
  const ref = useRef(null)
  const [show, setShow] = useState(false)

  useEffect(function () {
    const observer = new window.IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0]
      if (isIntersecting) {
        console.log('Si')
        setShow(true)
        observer.disconnect()
      }
    })

    observer.observe(ref.current)
  })

  return (
    <Article ref={ref}>
      <a href={`/detail/${id}`}>
        {show && <>
          <ImgWrapper>
            <Img src={src} />
          </ImgWrapper>
          <Button>
            <MdThumbUp size='32px' /> {likes} likes!
          </Button>
                 </>}
      </a>
    </Article>
  )
}
