import React from 'react'
import { SpinnerBox, LoadingIcon, Text } from './styles'

export const Spinner = () => {
  return (
    <SpinnerBox className='spinner-box'>
      <LoadingIcon className='loading-icon' />
      <Text>Loading...</Text>
    </SpinnerBox>
  )
}
