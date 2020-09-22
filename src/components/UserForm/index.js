import React, { useState, Fragment } from 'react'
import { Form, Input, Button, Title } from './styles'
const useInputValue = (initialValue) => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)
  return { value, onChange }
}

export const UserForm = ({ onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')
  return (<>
    <Title> {title} </Title>
    <Form onSubmit={onSubmit}>
      <Input
        type='email' placeholder='Email'
        {...email}
      />
      <Input
        type='password' placeholder='Password'
        {...password}
      />
      <Button>{title}</Button>
    </Form>
          </>)
}
